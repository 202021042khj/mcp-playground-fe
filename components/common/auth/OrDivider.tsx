export default function OrDivider() {
  return (
    <div className="flex items-center gap-4">
      <div className="h-px flex-1 bg-line" />
      <span className="text-sm leading-5 text-ink-secondary">or</span>
      <div className="h-px flex-1 bg-line" />
    </div>
  );
}
