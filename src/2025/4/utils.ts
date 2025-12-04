import type { Grid, Tile } from ".";

const dirs = [
	[-1, -1], // top left
	[0, -1], // top
	[1, -1], // top right
	[-1, 0], // left
	[1, 0], // right
	[-1, 1], // bottom left
	[0, 1], // bottom
	[1, 1], // bottom right
] as const;

export const getAdj = (tiles: Grid, i: number, j: number) => {
	return dirs
		.map(([di, dj]) => tiles[i + di]?.[j + dj])
		.filter((x) => x !== undefined);
};

export const countTileType = (tiles: Tile[], type: Tile) => {
	return tiles.filter((t) => t === type).length;
};

export const printGrid = (grid: Grid) => {
	console.info(grid.map((r) => r.join("")).join("\n"));
};
