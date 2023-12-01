const stringDigits = [
  { text: "one", value: 1 },
  { text: "two", value: 2 },
  { text: "three", value: 3 },
  { text: "four", value: 4 },
  { text: "five", value: 5 },
  { text: "six", value: 6 },
  { text: "seven", value: 7 },
  { text: "eight", value: 8 },
  { text: "nine", value: 9 },
];

export default function main(lines: string[]) {
  const output: number[] = [];

  lines.forEach((line) => {
    const foundDigits: Array<{ value: number; index: number }> = stringDigits
      .map((number) => ({
        ...number,
        matches: Array.from(
          line.matchAll(new RegExp(`${number.text}|${number.value}`, "g"))
        ),
      }))
      .filter(({ matches }) => matches.length > 0)
      .flatMap(({ value, matches }) =>
        matches.map(({ index }) => ({ value, index }))
      )
      .filter(
        (digitMatch): digitMatch is { value: number; index: number } =>
          digitMatch.index !== undefined
      );

    const sortedDigits = foundDigits.sort((a, b) => a.index - b.index);
    const first = sortedDigits[0];
    const last = sortedDigits[sortedDigits.length - 1];
    output.push(Number(`${first.value}${last.value}`));
  });

  return output.reduce((p, curr) => curr + p, 0);
}
