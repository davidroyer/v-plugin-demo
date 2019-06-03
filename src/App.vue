<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>Welcome to Your Plugin in Vue.js</h1>
    <p>add: 1 + 1 = {{ $add(1, 1) }}</p>
    <Editor v-model="content" @text-change="handleTextChange" />
    <!-- <VueEditor :editor-options="editorOptions" v-model="content" /> -->
  </div>
</template>

<script>
import { Editor } from "./../dist/v-plugin-demo.esm.js";
export default {
  components: { Editor },
  data() {
    return {
      // eToolbar: [
      //   [
      //     { align: "" },
      //     { align: "center" },
      //     { align: "right" },
      //     { align: "justify" }
      //   ],
      //   ["blockquote", "code-block"]
      // ],
      editorOptions: {
        modules: {
          toolbar: [
            [{ header: [false, 1, 2, 3, 4, 5, 6] }],
            ["bold", "italic", "underline", "strike"], // toggled buttons
            [
              { align: "" },
              { align: "center" },
              { align: "right" },
              { align: "justify" }
            ]
            // ["blockquote", "code-block"]
          ]
        },
        placeholder: "newww placeholder text here ..."
      },
      content: "value"
    };
  },

  methods: {
    handleTextChange(obj) {
      console.log("TCL: handleTextChange -> obj", obj);
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
