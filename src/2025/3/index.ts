import { expect, it } from "vitest";
import { readExample } from "@/utils";

type TInput = Array<number[]>;
type TOutput = number;

export const parseInput = (rawInput: string): TInput => {
	return rawInput
		.trim()
		.split("\n")
		.map((line) => line.trim().split("").map(Number));
};

export const part1 = async (input: TInput): Promise<TOutput> => {
	return input.reduce((sum, nums) => {
		let biggest = 0;

		for (let i = 0; i < nums.length; i++) {
			const first = nums.at(i);
			for (let j = i + 1; j < nums.length; j++) {
				const second = nums[j];
				if (!first || !second) continue;
				const num = first * 10 + second;
				if (num > biggest) {
					biggest = num;
				}
			}
		}

		return sum + biggest;
	}, 0);
};

const digits = 12;
export const part2 = async (input: TInput): Promise<TOutput> => {
	return input.reduce((sum, nums) => {
		let total = "";
		let last = 0;
		for (let i = 0; i < digits; i++) {
			const sub = nums.slice(last, nums.length - (digits - i - 1));
			const biggest = Math.max(...sub);
			const biggestIdx = last + sub.indexOf(biggest);

			total += String(biggest).trim();
			last = biggestIdx + 1;
		}
		return sum + Number(total);
	}, 0);
};

if (import.meta.vitest) {
	const input = await readExample("2025/3").then(parseInput);
	it("Example Part 1", async () => {
		const expected: TOutput = 357;
		expect(await part1(input)).toBe(expected);
	});

	it("Example Part 2", async () => {
		const expected: TOutput = 3121910778619;
		expect(await part2(input)).toBe(expected);
	});
}
