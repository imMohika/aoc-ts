export const isInvalid = (id: number) => {
	const str = String(id);
	if (str.length % 2 !== 0) return false;

	const halves = [str.slice(0, str.length / 2), str.slice(str.length / 2)];
	return halves[0] === halves[1];
};

export const hasRepetation = (id: number) => {
	const str = String(id);
	const sizes = chunkSizes(str.length);
	for (const size of sizes) {
		const chunks = chunkify(str, size);
		if (chunks.every((chunk) => chunk === chunks[0])) return true;
	}

	return false;
};

const chunkSizes = (len: number) => {
	return Array.from({ length: len }, (_, i) => i + 1)
		.filter((n) => len % n === 0)
		.slice(0, -1);
};

function chunkify(str: string, len: number) {
	return Array.from({ length: str.length / len }, (_, i) =>
		str.slice(i * len, i * len + len),
	);
}
