import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";

import { defineConfig } from "astro/config";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	site: "https://s-scb.github.io",
	base: "/Portfolio-Website",
	trailingSlash: "always",
	integrations: [tailwind(), compress(), icon()],
});
