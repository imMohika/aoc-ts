import { aocDays, aocYears } from "@/constants";
import type { TDay, TYear } from "@/type";

export function parsePuzzleName(name: string) {
	const [year, day] = name.split("/").map(Number);
	if (!year || !day) {
		throw new Error(`invalid puzzle name: expected 'year/day', got '${name}'`);
	}

	if (!aocYears.includes(year as TYear)) {
		throw new Error(`year ${year} is not supported`);
	}

	if (!aocDays.includes(day as TDay)) {
		throw new Error(`day ${day} is not supported`);
	}

	if (year >= 2025 && day > 12) {
		throw new Error(`since 2025 max day is 12`);
	}

	return { year, day };
}
