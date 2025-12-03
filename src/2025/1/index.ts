import consola from "consola";
import { expect, it } from "vitest";
import { readExample } from "@/utils";
import { dial } from "./utils";

export type Dir = "L" | "R";
const startsAt = 50;

type TInput = Array<{ dir: Dir; amount: number }>;
type TOutput = number;

export const parseInput = (rawInput: string): TInput => {
	return rawInput.split("\n").map((line) => ({
		dir: line.at(0) as Dir,
		amount: Number(line.slice(1)),
	}));
};

export const part1 = async (input: TInput): Promise<TOutput> => {
	const { zeroTimes } = input.reduce(
		({ curr, zeroTimes }, { dir, amount }) => {
			const next = dial(curr, dir, amount);
			consola.debug({ curr, zeroTimes, next, dir, amount });
			return { curr: next, zeroTimes: next === 0 ? zeroTimes + 1 : zeroTimes };
		},
		{ curr: startsAt, zeroTimes: 0 },
	);

	return zeroTimes;
};

export const part2 = async (input: TInput): Promise<TOutput> => {
	const { zeroTimes } = input.reduce(
		({ curr, zeroTimes }, { dir, amount }) => {
			let next = curr;
			let seenZero = 0;
			for (let i = 0; i < amount; i++) {
				next = dial(next, dir, 1);
				if (next === 0) seenZero++;
			}

			consola.debug({ curr, zeroTimes, next, dir, amount, seenZero });
			return { curr: next, zeroTimes: zeroTimes + seenZero };
		},
		{ curr: startsAt, zeroTimes: 0 },
	);

	return zeroTimes;
};

if (import.meta.vitest) {
	const input = await readExample("2025/1").then(parseInput);
	it("Example Part 1", async () => {
		const expected: TOutput = 3;
		expect(await part1(input)).toBe(expected);
	});

	it("Example Part 2", async () => {
		const expected: TOutput = 6;
		expect(await part2(input)).toBe(expected);
	});
}
