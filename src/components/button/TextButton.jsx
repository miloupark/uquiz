export default function TextButton({
  type = "button",
  inactive = false,
  children,
  ...props
}) {
  return (
    <button
      type={type}
      {...props}
      className={`h-12 inline-flex justify-center items-center text-sm font-medium p-2 rounded-md border outline-none transition duration-300 ease-in-out
        ${
          inactive
            ? "bg-neutral-200 text-neutral-400 border-neutral-50 hover:bg-neutral-300"
            : "bg-primary text-white border-neutral-50 hover:border-neutral-300 hover:bg-primary hover:text-white focus-visible:border-blue-500 focus-visible:ring-4 focus-visible:ring-blue-500/10"
        }`}
    >
      {children}
    </button>
  );
}
