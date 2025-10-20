import React from "react";
import CenteredCard from "./layout/CenteredCard";
import IconButton from "./button/IconButton";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <CenteredCard>
      <div className="text-center">
        <h2>404 Not Found</h2>
        <p>찾을 수 없는 페이지입니다.</p>
      </div>
      <div>
        <IconButton as={Link} to={"/"} className="justify-center">
          <Home />
          <span>홈으로 돌아가기</span>
        </IconButton>
      </div>
    </CenteredCard>
  );
}
