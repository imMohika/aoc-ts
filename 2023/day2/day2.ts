const maxCubes = {
  red: 12,
  green: 13,
  blue: 14,
};
export default function main(lines: string[]) {
  const possibleGames: number[] = [];
  const gamesMaxCubes: (typeof maxCubes)[] = [];

  lines.forEach((line) => {
    const [game, data] = line.split(":").map((s) => s.trim());
    const rounds = data.split(";").map((s) => s.trim());
    const maxPresent = {
      red: -1,
      green: -1,
      blue: -1,
    };

    let possible = true;
    for (const round of rounds) {
      console.log({ round });
      const sets = round.split(", ");
      for (const set of sets) {
        const [amount, color] = set.split(" ");

        if (amount > maxPresent[color]) {
          maxPresent[color] = Number(amount);
        }

        const max = maxCubes[color];
        if (Number(amount) > max) {
          possible = false;
          console.log("out", round);
        }
      }
    }
    console.log({ game, rounds });
    const gameNumber = Number(game.split(" ")[1]);
    if (possible) possibleGames.push(gameNumber);
    console.log({ gameNumber, maxPresent });
    gamesMaxCubes.push(maxPresent);
  });

  console.log({ possibleGames });
  const sum = possibleGames.reduce((prev, curr) => curr + prev, 0);
  const power = gamesMaxCubes
    .map((m) => {
      const t = Object.values(m).reduce((prev, curr) => curr * prev, 1);
      console.log(t);
      return t;
    })

    .reduce((prev, curr) => curr + prev, 0);
  const output = { sum, power };
  console.log(output);
  return output;
}
