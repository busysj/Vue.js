Vue.component("memo-component", {
  props: ["id"],
  template: `
            <div>
                <h3>
                    메모
                    <button @click="deletememo">X</button>
                </h3>
                <slot></slot>
                <p>{{ new Date() }}</p>
            </div>
          `,
  methods: {
    deletememo() {
      this.$emit("delete", this.id);
    },
  },
});
