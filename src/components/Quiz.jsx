// 🧩 퀴즈 풀이 페이지
import { useParams } from "react-router-dom";

function Quiz() {
  const { nickname } = useParams();

  return (
    <section>
      <h2>{nickname}님의 퀴즈</h2>
    </section>
  );
}
export default Quiz;
