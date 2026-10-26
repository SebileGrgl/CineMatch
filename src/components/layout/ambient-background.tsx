export function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-obsidian-950" />
      <div className="absolute inset-0 bg-cinema-spotlight" />
      <div className="absolute -top-40 left-1/2 size-[42rem] -translate-x-1/2 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="absolute right-[-12rem] bottom-[-14rem] size-[36rem] rounded-full bg-crimson-500/10 blur-3xl" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-obsidian-950/80" />
    </div>
  );
}
