import { resolve } from "node:path";
import { parseArgs } from "node:util";
import consola from "consola";
import { parsePuzzleName } from "./utils";

const { positionals } = parseArgs({
	args: Bun.argv,
	strict: true,
	allowPositionals: true,
});

const name = positionals[2];
if (!name) {
	throw new Error("puzzle name not provided");
}

const { year, day } = parsePuzzleName(name);
const puzzleName = `${year}/${day}`;

consola.info(`Running part 2 of '${puzzleName}'`);

const root = resolve(process.cwd(), `./src/${year}/${day}`);
const input = await Bun.file(`${root}/input.txt`).text();

const { part2, parseInput } = await import(`${root}`);
const parsedInput = parseInput(input);
consola.info("Part 2 answer:", await part2(parsedInput));
