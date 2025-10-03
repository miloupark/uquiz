// 🧩 닉네임 설정 페이지 (메인 페이지)
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Home() {
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  const handleNickname = (e) => {
    const target = e.target;
    // console.log(target.value);
    setNickname(target.value);
  };

  const handleStart = (e) => {
    e.preventDefault();
    if (!nickname.trim()) {
      toast.error("닉네임을 입력해주세요.");
      return;
    }
    toast.success("퀴즈 시작!");
    navigate(`/quiz/${encodeURIComponent(nickname)}`);
  };

  return (
    <section>
      <h1>UQuiz</h1>

      <form onSubmit={handleStart}>
        <label htmlFor="nickname-input" className="a11yhidden">
          닉네임
        </label>
        <input
          id="nickname-input"
          type="text"
          value={nickname}
          placeholder="닉네임을 입력하세요."
          onChange={handleNickname}
        />

        <button type="submit">시작하기</button>
      </form>
    </section>
  );
}
export default Home;
