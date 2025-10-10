export default function TextButton({ type, children }) {
  return (
    <button
      type={type}
      className="h-10 inline-flex justify-center items-center text-sm font-medium text-primary p-2 rounded-md bg-neutral-300 border border-neutral-50 hover:border-neutral-300 hover:bg-primary hover:text-white outline-none focus-visible:border-blue-500 focus-visible:ring-4 focus-visible:ring-blue-500/10 transition duration-300 ease-in-out"
    >
      {children}
    </button>
  );
}
