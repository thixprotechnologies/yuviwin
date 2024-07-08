import { createApp } from "vue";
import App from "./App.vue";
import common from "./common";
import router from "./router";
import VsToast from "@vuesimple/vs-toast";
import VOtpInput from "vue3-otp-input";

const app = createApp(App, {
    compilerOptions: {
        isCustomElement: (tag) => tag.startsWith("vue3-otp-input"),
    },
});
app.component('v-otp-input', VOtpInput)
app.mixin(common); // Apply the common mixin to all components
app.use(VsToast);

app.use(router);
app.mount("#app");
