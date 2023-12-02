import { expect, test } from "vitest";
import day1 from "./day1";

test("test with first example input", () => {
  const input = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;

  const output = day1(input.split("\n"));

  expect(output).toBe(142);
});

test("test with second example input", () => {
  const input = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;

  const output = day1(input.split("\n"));

  expect(output).toBe(281);
});
