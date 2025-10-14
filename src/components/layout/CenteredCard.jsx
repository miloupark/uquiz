export default function CenteredCard({ children }) {
  return (
    <section className="min-h-screen flex items-center justify-center p-10">
      <div className="w-full max-w-120 grid p-5 gap-5 rounded-xl bg-neutral-50 shadow-md">
        {children}
      </div>
    </section>
  );
}
