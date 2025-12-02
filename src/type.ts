import type { aocDays, aocYears } from "./constants";

export type TYear = (typeof aocYears)[number];
export type TDay = (typeof aocDays)[number];

export type TPuzzle = `${TYear}/${TDay}`;
