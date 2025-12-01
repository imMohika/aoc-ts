import consola from "consola";
import type { TPuzzle } from "./type";

export class WrongExampleError<T> extends Error {
	constructor(
		public want: T,
		public got: T,
		idx: number,
	) {
		super(`Example part ${idx + 1}: expected ${want}, got ${got}`);
		this.name = "WrongExampleError";
	}
}

export const readExample = async (puzzle: TPuzzle) => {
	const path = `./src/${puzzle}/example.txt`;
	const file = Bun.file(path);
	return file.text().then((t) => t.trim());
};

export const checkExample = async <T>(parts: Array<{ want: T; got: T }>) => {
	parts.forEach(({ want, got }, idx) => {
		if (want !== got) {
			throw new WrongExampleError(want, got, idx);
		}

		consola.success(`Example part ${idx + 1}: ${got}`);
	});
};

export const readInput = async (puzzle: TPuzzle) => {
	const path = `./src/${puzzle}/input.txt`;
	const file = Bun.file(path);
	return file.text().then((t) => t.trim());
};
