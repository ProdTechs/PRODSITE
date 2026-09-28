export function Cursor({ blink = true }: { blink?: boolean }) {
  return (
    <span aria-hidden="true" className={blink ? "cursor" : "text-accent"}>
      _
    </span>
  );
}
