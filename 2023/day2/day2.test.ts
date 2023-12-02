import { expect, test } from "vitest";
import day2 from "./day2";

test("test with first example input", () => {
  const input = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;

  const output = day2(input.split("\n"));

  expect(output.sum).toBe(8);
  expect(output.power).toBe(2286);
});

// test("test with second example input", () => {
//   const input = `two1nine
// eightwothree
// abcone2threexyz
// xtwone3four
// 4nineeightseven2
// zoneight234
// 7pqrstsixteen`;

//   const output = day1(input.split("\n"));

//   expect(output).toBe(281);
// });
