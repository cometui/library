import type { Plugin } from "vue";
type Theme = "google" | "default";

interface PluginOptions {
  theme: Theme;
}

import Button from "../components/Button/index";

const plugin: Plugin = {
  install(app, options: PluginOptions) {
    app.component("cButton", Button);
  },
};

export { Button };

export type { PluginOptions };
export default plugin;
