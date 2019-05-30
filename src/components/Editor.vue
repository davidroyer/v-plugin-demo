<template>
  <div class="p-editor-container">
    <div ref="toolbarElement" class="p-editor-toolbar">
      <slot name="toolbar">
        <span class="ql-formats">
          <select class="ql-header" defaultValue="0">
            <option value="1">Heading</option>
            <option value="2">Subheading</option>
            <option value="0">Normal</option>
          </select>
          <select class="ql-font">
            <option></option>
            <option value="serif"></option>
            <option value="monospace"></option>
          </select>
        </span>
        <span class="ql-formats">
          <button class="ql-bold"></button>
          <button class="ql-italic"></button>
          <button class="ql-underline"></button>
        </span>
        <span class="ql-formats">
          <select class="ql-color"></select>
          <select class="ql-background"></select>
        </span>
        <span class="ql-formats">
          <button class="ql-list" value="ordered"></button>
          <button class="ql-list" value="bullet"></button>
          <select class="ql-align">
            <option defaultValue></option>
            <option value="center"></option>
            <option value="right"></option>
            <option value="justify"></option>
          </select>
        </span>
        <span class="ql-formats">
          <button class="ql-link"></button>
          <button class="ql-image"></button>
          <button class="ql-code-block"></button>
        </span>
        <span class="ql-formats">
          <button class="ql-clean"></button>
        </span>
      </slot>
    </div>
    <div
      ref="editorElement"
      class="p-editor-content"
      :style="editorStyle"
    ></div>
  </div>
</template>

<script>
import Quill from "quill";

export default {
  props: {
    value: String,
    placeholder: String,
    readonly: Boolean,
    formats: Array,
    editorStyle: null
  },
  quill: null,
  watch: {
    value(newValue, oldValue) {
      if (newValue !== oldValue && this.quill && !this.quill.hasFocus()) {
        this.renderValue(newValue);
      }
    }
  },
  mounted() {
    this.quill = new Quill(this.$refs.editorElement, {
      modules: {
        toolbar: this.$refs.toolbarElement
      },
      readOnly: this.readOnly,
      theme: "snow",
      formats: this.formats
    });

    this.quill.on("text-change", (delta, source) => {
      let html = this.$refs.editorElement.children[0].innerHTML;
      if (html === "<p><br></p>") {
        html = "";
      }

      this.$emit("input", html);
      this.$emit("text-change", {
        htmlValue: html,
        textValue: this.quill.getText(),
        delta: delta,
        source: source
      });
    });

    this.renderValue(this.value);
  },
  methods: {
    renderValue(value) {
      if (this.quill) {
        if (value) this.quill.pasteHTML(value);
        else this.quill.setText("");
      }
    }
  },
  beforeDestroy() {
    this.quill = null;
  }
};
</script>

<style src="quill/dist/quill.snow.css"></style>
