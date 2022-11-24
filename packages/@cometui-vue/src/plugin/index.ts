import type { Plugin } from "vue";

interface PluginOptions {}

import Button from "../components/Button/index";

const plugin: Plugin = {
  install(app, options: PluginOptions) {
    app.component("cButton", Button);
  },
};

export { Button };

export type { PluginOptions };
export default plugin;
