import { join } from "node:path";
import { readFileSync } from "node:fs";
import day2 from "./day2";
import { fileURLToPath } from "node:url";

const currDir = join(fileURLToPath(import.meta.url), "..");

const input = readFileSync(join(currDir, "input.txt"), "utf-8");
const output = day2(input.split("\n").map((line) => line.trim()));
console.log(output);
