import { appendFile } from "node:fs/promises";
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

const root = `src/${year}/${day}`;
consola.info(`Creating puzzle '${puzzleName}' at '${root}'`);

const templateText = await Bun.file("src/template.ts").text();
const parsed = templateText
	.replaceAll("{{PUZZLE_NAME}}", puzzleName)
	.replaceAll("//@ts-expect-error", "");

await Bun.write(`${root}/index.ts`, parsed);
for (const file of ["example.txt", "input.txt", "utils.ts"]) {
	await appendFile(`${root}/${file}`, "");
}
