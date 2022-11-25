import { defineComponent, h } from "vue";

export default defineComponent({
  name: "Button",
  props: {
    loading: Boolean,
  },
  setup(props, { slots }) {
    return () =>
      h(
        "button",
        {
          class: "comet-button",
        },
        slots.default?.()
      );
  },
});
