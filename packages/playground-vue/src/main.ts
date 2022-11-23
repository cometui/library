import { createApp } from "vue";
import App from "./App.vue";

import { Button, Test } from "@cometui/vue";

import "@/styles/tailwind.css";
import "../../@cometui-tailwindcss/src/base/index.css";

const app = createApp(App);

app.use(cometui);
app.mount("#app");
