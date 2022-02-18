const memoApp = {
  data() {
    return {
      inputMemo: "",
      memos: [
        {
          text: "ひき肉を300g買う",
          isDone: false,
        },
        {
          text: "ホウレンソウを1束買う",
          isDone: false,
        },
        {
          text: "ピーマンを2個買う",
          isDone: false,
        },
      ],
    };
  },
  methods: {
    addMemo() {
      if (this.inputMemo !== "") {
        const memo = { text: this.inputMemo, isDone: false };
        this.memos.push(memo);
      }
    },
    deleteMemo(index) {
      this.memos.splice(index, 1);
    },
  },
};
Vue.createApp(memoApp).mount("#app");
