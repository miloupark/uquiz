// 🧩 퀴즈 풀이 페이지
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import questions from '../data/questions.json';
import toast from 'react-hot-toast';
import useResultStore from '../stores/useResultStore';
import TextButton from './button/TextButton';

export default function Quiz() {
  const { nickname } = useParams();
  const navigate = useNavigate();

  // 점수 저장 액션
  const addResult = useResultStore((state) => state.addResult);

  // 상태
  const [currentIndex, setCurrentIndex] = useState(0); // 현재 문제 번호
  const [selectedOption, setSelectedOption] = useState(null); // 선택한 보기 인덱스
  const [answerCounts, setAnswerCounts] = useState(0); // 누적 정답

  const current = questions[currentIndex]; // 현재 문제
  const isLast = currentIndex === questions.length - 1; // 마지막 문제인지 체크

  // 보기 선택
  const handleSelect = (index) => {
    setSelectedOption(index);
  };

  // 다음 버튼 클릭 시
  const handleNext = () => {
    // 선택하지 않았으면 경고
    if (selectedOption === null) {
      toast.error('선택지를 선택해주세요.');
      return;
    }

    // 정답 체크 후 점수 반영
    const isCorrect = selectedOption === current.answer;
    const nextScore = isCorrect ? answerCounts + 1 : answerCounts;

    setAnswerCounts(nextScore); // 점수 상태 업데이트
    setSelectedOption(null); // 다음 문제를 위해 선택 초기화

    // 마지막 문제
    if (isLast) {
      addResult(nickname, nextScore);
      navigate(`/results/${encodeURIComponent(nickname)}`);
      return;
    }

    // 다음 문제로 이동
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <section className="min-h-screen flex items-center justify-center p-10">
      <div className="w-full max-w-120 grid p-5 gap-5 rounded-xl bg-neutral-50 shadow-md">
        <h2>{nickname}님의 퀴즈</h2>

        <h3>
          <span className="text-xl font-medium pr-1">Q{currentIndex + 1}.</span>
          {current.question}
        </h3>
        <p className="text-end text-sm text-primary">
          {currentIndex + 1} / {questions.length}
        </p>
        {/* 선택지 */}
        <ul className="grid gap-y-2">
          {current.options.map((option, index) => {
            const checked = selectedOption === index;

            return (
              <li
                key={index}
                className={`flex border text-sm border-neutral-200 rounded-md
                  ${checked ? 'border-primary/40' : 'border-neutral-200'}`}
              >
                <label className="w-full h-10 px-4 py-2">
                  <input
                    type="radio"
                    name="option"
                    checked={checked}
                    onChange={() => handleSelect(index)}
                    className="mr-4"
                  />
                  {option}
                </label>
              </li>
            );
          })}
        </ul>
        <TextButton onClick={handleNext} inactive={selectedOption === null}>
          {isLast ? '제출' : '다음'}
        </TextButton>
      </div>
    </section>
  );
}
