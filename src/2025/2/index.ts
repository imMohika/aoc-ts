import { expect, it } from "vitest";
import { readExample } from "@/utils";
import { hasRepetation, isInvalid } from "./utils";

type TInput = Array<{ lower: number; upper: number }>;
type TOutput = number;

export const parseInput = (rawInput: string): TInput => {
	return rawInput
		.split("\n")
		.join("")
		.trim()
		.split(",")
		.map((ranges) => {
			const [lower, upper] = ranges.split("-");
			if (!lower || !upper || lower.startsWith("0") || upper.startsWith("0")) {
				return null;
			}

			return { lower: Number(lower), upper: Number(upper) };
		})
		.filter(Boolean);
};

export const part1 = async (input: TInput): Promise<TOutput> => {
	return input.reduce((sum, { lower, upper }) => {
		let innerSum = 0;
		for (let i = lower; i <= upper; i++) {
			if (isInvalid(i)) {
				innerSum += i;
			}
		}
		return sum + innerSum;
	}, 0);
};

export const part2 = async (input: TInput): Promise<TOutput> => {
	return input.reduce((sum, { lower, upper }) => {
		let innerSum = 0;
		for (let i = lower; i <= upper; i++) {
			if (hasRepetation(i)) {
				innerSum += i;
			}
		}
		return sum + innerSum;
	}, 0);
};

if (import.meta.vitest) {
	const input = await readExample("2025/2").then(parseInput);
	it("Example Part 1", async () => {
		const expected: TOutput = 1227775554;
		expect(await part1(input)).toBe(expected);
	});

	it("Example Part 2", async () => {
		const expected: TOutput = 4174379265;
		expect(await part2(input)).toBe(expected);
	});
}
