import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

	addons: [
		"@storybook/addon-onboarding",
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@chromatic-com/storybook",
		"@storybook/addon-interactions",
		"@stackblitz/storybook-addon-stackblitz",
	],

	framework: {
		name: "@storybook/react-vite",
		options: {},
	},

	docs: {},

	viteFinal: async (config) => {
		config.plugins?.push(
			// We need it because we define "paths" in the tsconfig.json file
			tsconfigPaths({
				projects: [
					path.resolve(path.dirname(__dirname), "tsconfig.json"),
				],
			})
		);

		return config;
	},

	typescript: {
		reactDocgen: "react-docgen-typescript",
	},
};
export default config;
