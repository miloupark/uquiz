// 🧩 결과 페이지
import { useParams } from "react-router-dom";

function Results() {
  const { nickname } = useParams();

  return (
    <section>
      <h2>{nickname}님의 퀴즈 결과</h2>
    </section>
  );
}
export default Results;
