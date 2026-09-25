type MediaPlaceholderProps = {
  label: string;
  aspectClassName?: string;
  className?: string;
};

export function MediaPlaceholder({
  label,
  aspectClassName = "aspect-[16/10]",
  className = "",
}: MediaPlaceholderProps) {
  return (
    <div
      className={`relative overflow-hidden border border-lead bg-steel ${aspectClassName} ${className}`}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(212,175,55,0.08) 0%, transparent 40%, rgba(0,180,216,0.06) 100%), repeating-linear-gradient(0deg, transparent, transparent 31px, rgba(138,138,138,0.12) 32px), repeating-linear-gradient(90deg, transparent, transparent 31px, rgba(138,138,138,0.12) 32px)",
        }}
        aria-hidden
      />
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-2 p-6 text-center">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-highlight">
          MEDIA
        </span>
        <span className="max-w-xs font-display text-sm text-ash">{label}</span>
      </div>
      <div className="corner-bracket corner-bracket-tl" aria-hidden />
      <div className="corner-bracket corner-bracket-br" aria-hidden />
    </div>
  );
}
