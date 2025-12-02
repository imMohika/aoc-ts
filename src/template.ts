import consola from "consola";
import { expect, it } from "vitest";
import { readExample } from "@/utils";

type TInput = string;
type TOutput = string;

const parseInput = (rawInput: string): TInput => {
	return rawInput;
};

export const part1 = async (input: TInput): Promise<TOutput> => {
	consola.info(input);
	return "{{ANSWER}}";
};

export const part2 = async (input: TInput): Promise<TOutput> => {
	consola.info(input);
	return "{{ANSWER}}";
};

if (import.meta.vitest) {
	//@ts-expect-error
	const input = await readExample("{{PUZZLE_NAME}}").then(parseInput);
	it("Example Part 1", async () => {
		const expected: TOutput = "{{ANSWER}}";
		expect(await part1(input)).toBe(expected);
	});

	it("Example Part 2", async () => {
		const expected: TOutput = "{{ANSWER}}";
		expect(await part2(input)).toBe(expected);
	});
}
