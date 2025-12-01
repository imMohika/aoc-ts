import consola from "consola";
import { checkExample, readExample, readInput } from "@/utils";

const startsAt = 50;
const upper = 99;
const lower = 0;
const size = upper - lower + 1;

type Dir = "L" | "R";

consola.info("=== Example");
const example = await readExample("2025/1");
await checkExample([
	{ want: 3, got: await part1(example) },
	{ want: 6, got: await part2(example) },
]);

consola.info("=== Input");
const input = await readInput("2025/1");
consola.info("Part 1 Answer:", await part1(input));
consola.info("Part 2 Answer:", await part2(input));

async function part1(text: string) {
	const lines = text.split("\n");
	const { zeroTimes } = lines.reduce(
		({ curr, zeroTimes }, line) => {
			const { dir, amount } = parseLine(line);
			const next = dial(curr, dir, amount);
			consola.debug({ curr, zeroTimes, next, dir, amount });
			return { curr: next, zeroTimes: next === 0 ? zeroTimes + 1 : zeroTimes };
		},
		{ curr: startsAt, zeroTimes: 0 },
	);

	return zeroTimes;
}

async function part2(text: string) {
	const lines = text.split("\n");

	const { zeroTimes } = lines.reduce(
		({ curr, zeroTimes }, line) => {
			const { dir, amount } = parseLine(line);
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
}

function dial(curr: number, dir: Dir, step: number) {
	const sign = dir === "R" ? 1 : -1;
	const delta = sign * step;
	const next = (curr - lower + delta + size) % size;
	return next;
}

function parseLine(line: string): { dir: Dir; amount: number } {
	const dir = line.at(0) as Dir;
	const amount = Number(line.slice(1));
	return { dir, amount };
}
