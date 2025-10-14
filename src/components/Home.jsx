// 🧩 닉네임 설정 페이지 (메인 페이지)
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import TextButton from "./button/TextButton";
import CenteredCard from "./layout/CenteredCard";

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
    <CenteredCard>
      <h1 className="font-logo font-bold text-2xl">UQuiz?</h1>
      <p className="text-4 font-medium tracking-tighter">
        준비됐나요? 바로 시작!
      </p>
      <form
        onSubmit={handleStart}
        noValidate
        className="flex flex-col gap-2 text-center"
      >
        <label htmlFor="nickname-input" className="sr-only">
          닉네임
        </label>
        <input
          id="nickname-input"
          type="text"
          value={nickname}
          placeholder="닉네임을 입력하세요."
          onChange={handleNickname}
          className="flex-1 text-sm outline-none border border-neutral-300 p-2 rounded-md bg-neutral-50 placeholder:text-neutral-400 hover:border-neutral-300 hover:bg-neutral-100 focus-visible:border-blue-500 focus-visible:ring-4 focus-visible:ring-blue-500/10 transition-all"
        />
        <TextButton type="submit" inactive={!nickname.trim()}>
          시작하기
        </TextButton>
      </form>
    </CenteredCard>
  );
}
export default Home;
