type SectionNumberProps = {
  number: string;
};

export function SectionNumber({ number }: SectionNumberProps) {
  return (
    <div className="mb-6 flex items-center gap-2">
      <span className="h-1 w-1 bg-highlight" aria-hidden />
      <span className="font-mono text-[11px] tracking-wider text-highlight">
        {number}
      </span>
    </div>
  );
}
