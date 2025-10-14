// 🧩 결과 페이지
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import useResultStore from "../stores/useResultStore";
import questions from "../data/questions.json";
import { Eraser, Home, RotateCw } from "lucide-react";

function Results() {
  const { nickname } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  // Zustand에서 데이터 불러오기
  const results = useResultStore((state) => state.results);
  const resetResults = useResultStore((state) => state.resetResults);

  // 내 히스토리, 최신 점수
  const history = results.filter((r) => r.nickname === nickname);
  const latest = history.at(-1);
  const score =
    typeof state?.score === "number" ? state.score : latest?.score ?? 0;

  // 전체 랭킹
  const topRanking = [...results].sort((a, b) => b.score - a.score);

  // 리셋 버튼
  const handleResetAll = () => {
    resetResults();
  };

  // 홈 버튼
  const handleHome = () => navigate("/");

  return (
    <section className="min-h-screen flex items-center justify-center p-10">
      <div className="w-full max-w-120 grid p-5 gap-5 rounded-xl bg-neutral-50 shadow-md">
        <div className="flex justify-between items-center">
          <h2>{nickname}님의 결과</h2>
        </div>
        <div className="flex justify-between px-10 py-2">
          <span>내 점수</span>
          <span className="text-center">
            {score}점 / {questions.length}
          </span>
        </div>
        <p className="text-center">전체 랭킹</p>
        {topRanking.length === 0 ? (
          <p>아직 랭킹 데이터가 없어요.</p>
        ) : (
          <ul className="grid gap-y-2">
            {topRanking.map(({ id, nickname, score, playedAt }) => (
              <li key={id} className="flex items-center gap-4">
                <span className="flex-1">{nickname}</span>
                <span className="min-w-[48px] text-end">
                  {score} / {questions.length}
                </span>
                <span className="min-w-[140px] text-sm text-end">
                  {playedAt}
                </span>
              </li>
            ))}
          </ul>
        )}

        <Link
          to={`/quiz/${encodeURIComponent(nickname)}`}
          className="flex items-center gap-2"
          aria-label="현재 닉네임으로 다시 퀴즈 시작"
        >
          <RotateCw />
          <span>다시 도전하기</span>
        </Link>

        <button
          type="button"
          onClick={handleHome}
          className="flex items-center gap-2"
        >
          <Home />
          <span>처음으로 돌아가기</span>
        </button>

        <button type="button" onClick={handleResetAll} className="flex gap-2">
          <Eraser />
          <span>기록 모두 지우기</span>
        </button>
      </div>
    </section>
  );
}
export default Results;
