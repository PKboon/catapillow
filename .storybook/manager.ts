import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming/create";

const theme = create({
  base: "light",
  brandTitle: "<img src='/logo.png' alt='Catapillow' />",
});

addons.setConfig({
  theme: theme,
});
