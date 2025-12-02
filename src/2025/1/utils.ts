import type { Dir } from ".";

const upper = 99;
const lower = 0;
const size = upper - lower + 1;

export function dial(curr: number, dir: Dir, step: number) {
	const sign = dir === "R" ? 1 : -1;
	const delta = sign * step;
	const next = (curr - lower + delta + size) % size;
	return next;
}
