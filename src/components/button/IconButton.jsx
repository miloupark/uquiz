import React from "react";
// 🧩 IconButton
// button과 Link 엘리먼트로 렌더링

export default function IconButton({
  as: As = "button",
  type = "button",
  className = "",
  children,
  ...props
}) {
  const base =
    "flex items-center text-sm gap-2 px-3 py-2 bg-neutral-100 border border-neutral-200 rounded-sm cursor-pointer [&>svg]:w-4 [&>svg]:h-4 hover:bg-neutral-200";
  const commonProps = As === "button" ? { type, ...props } : props;
  return (
    <As {...commonProps} className={`${base} ${className}`}>
      {children}
    </As>
  );
}
