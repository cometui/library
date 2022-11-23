import { createApp } from "vue";
import App from "./App.vue";

<<<<<<< HEAD
import { Button, Test } from "@cometui/vue";

import "@/styles/tailwind.css";
import "../../@cometui-tailwindcss/src/base/index.css";
=======
import "@/styles/main.scss";
// import "../../@cometui-tailwindcss/src/base/index.css";
>>>>>>> 1f5956ddba4b2016463b757d1defa5167e7bae13

const app = createApp(App);

app.use(cometui);
app.mount("#app");
