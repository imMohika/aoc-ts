import { join } from "node:path";
import { readFileSync } from "node:fs";
import day1 from "./day1";
import { fileURLToPath } from "node:url";

const currDir = join(fileURLToPath(import.meta.url), "..");

const input = readFileSync(join(currDir, "input.txt"), "utf-8");
const output = day1(input.split("\n").map((line) => line.trim()));
console.log(output);
