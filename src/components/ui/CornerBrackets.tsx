type CornerBracketsProps = {
  pulse?: boolean;
};

export function CornerBrackets({ pulse = true }: CornerBracketsProps) {
  const pulseClass = pulse ? "bracket-pulse" : "";

  return (
    <>
      <div
        className={`corner-bracket corner-bracket-tl ${pulseClass}`}
        aria-hidden
      />
      <div
        className={`corner-bracket corner-bracket-tr ${pulseClass} bracket-pulse-delay-1`}
        aria-hidden
      />
      <div
        className={`corner-bracket corner-bracket-bl ${pulseClass} bracket-pulse-delay-2`}
        aria-hidden
      />
      <div
        className={`corner-bracket corner-bracket-br ${pulseClass} bracket-pulse-delay-3`}
        aria-hidden
      />
    </>
  );
}
