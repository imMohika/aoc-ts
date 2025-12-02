import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		includeSource: ["src/**/*.ts", "!src/template.ts"],
		alias: {
			"@/": new URL("./src/", import.meta.url).pathname,
		},
	},
});
