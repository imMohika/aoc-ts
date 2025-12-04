import { expect, it } from "vitest";
import { readExample } from "@/utils";
import { countTileType, getAdj } from "./utils";

export type Tile = "." | "@" | "x";
export type Grid = Tile[][];

type TInput = Grid;
type TOutput = number;

export const parseInput = (rawInput: string): TInput => {
	return rawInput
		.trim()
		.split("\n")
		.map((l) =>
			l
				.trim()
				.split("")
				.map((c) => c as Tile),
		);
};

export const part1 = async (input: TInput): Promise<TOutput> => {
	const maxAdj = 4;
	// const grid = Array.from(input.map((row) => Array.from(row)));

	const sum = input.reduce(
		(sum, row, rowIdx) =>
			sum +
			row.reduce((sum, tile, colIdx) => {
				if (tile !== "@") return sum;

				const adj = getAdj(input, rowIdx, colIdx);
				// console.info({ adj, rowIdx, colIdx });

				const paperRolls = countTileType(adj, "@");
				if (paperRolls < maxAdj) {
					// grid[rowIdx][colIdx] = "x";
					return sum + 1;
				}
				return sum;
			}, 0),
		0,
	);

	// printGrid(grid);
	return sum;
};

export const part2 = async (input: TInput): Promise<TOutput> => {
	const maxAdj = 4;
	const grid = Array.from(input.map((row) => Array.from(row)));
	let sum = 0;
	let changed = 0;
	let iter = 0;

	do {
		console.info(`Iteration ${iter++}, last iter changed ${changed}`);
		changed = 0;

		for (let i = 0; i < grid.length; i++) {
			const row = grid[i] as Tile[];
			for (let j = 0; j < row.length; j++) {
				const col = row[j] as Tile;
				if (col !== "@") continue;

				const paperRolls = countTileType(getAdj(grid, i, j), "@");
				if (paperRolls < maxAdj) {
					row[j] = "x";
					changed++;
				}
			}
		}

		sum += changed;
	} while (changed > 0);

	return sum;
};

if (import.meta.vitest) {
	const input = await readExample("2025/4").then(parseInput);
	it("Example Part 1", async () => {
		const expected: TOutput = 13;
		expect(await part1(input)).toBe(expected);
	});

	it("Example Part 2", async () => {
		const expected: TOutput = 43;
		expect(await part2(input)).toBe(expected);
	});
}
