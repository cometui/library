import { createApp } from "vue";
import App from "./App.vue";
import cometui from "@cometui/vue";

import "@/styles/tailwind.css";
import "@cometui/tailwindcss/src/main.scss";

const app = createApp(App);
app.use(cometui);
app.mount("#app");
