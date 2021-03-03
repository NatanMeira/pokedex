export default function NumberPadding(value: number, padding = 3) {
  const zeroes = new Array(padding + 1).join('0');
  return (zeroes + value).slice(-padding);
}
