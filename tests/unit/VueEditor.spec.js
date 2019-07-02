// import * as Quill from "quill";
import quillFixer from "@/test-helpers/quill-fixer.js";
import VueEditor from "@/components/VueEditor";
import { mount } from "@vue/test-utils";

quillFixer();

const customToolbar = [["blockquote", "code-block"]];
const updatedContentValue = "<h2>UPDATED DATA</h2>";

test("mount a vue component", () => {
  const wrapper = mount(VueEditor, {
    propsData: {
      value: "Vue School newww",
      editorToolbar: customToolbar
    }
  });

  expect(wrapper.contains(".ql-editor")).toBe(true);
  expect(wrapper).toMatchSnapshot();

  // test("ListComponent", () => {
  //   const wrapper = mount(List);
  //   const movies = wrapper.vm.marvelMovies;
  //   wrapper.setData({ marvelMovies: [...movies, "Endgame"] });
  //   expect(wrapper).toMatchSnapshot();
});

test("Tests updating content", () => {
  const Parent = mount({
    data: () => ({ content: "starting data" }),
    template: '<div> <VueEditor v-model="content"></VueEditor> </div>',
    components: { VueEditor }
  });

  const { vm } = Parent;

  console.log("INITIAL: vm.content ", vm.content);

  Parent.setData({ content: updatedContentValue });
  expect(Parent.vm.content).toBe(updatedContentValue);
  expect(Parent).toMatchSnapshot();

  console.log("AFTER UPDATE: vm.content ", vm.content);
});

// expect(wrapper.html()).toBe(
//   '<div class="ql-editor ql-blank" data-gramm="false" contenteditable="true"><h1>Starter Content</h1></div>'
// );
// var parent = mount({
//   data: () => ({ contentForEditor: "INITIAL CONTENT" }),
//   template: `<div> <VueEditor v-model="contentForEditor"/> </div>`,
//   components: { VueEditor }
// });
// console.log("TCL: parent", parent);

// test("changing the element's value, updates the v-model", () => {
//   var parent = mount({
//     data: () => ({ contentForEditor: "INITIAL CONTENT" }),
//     template: `<div> <VueEditor v-model="contentForEditor"/> </div>`,
//     components: { VueEditor }
//   });
//   console.log("TCL: parent", parent);

//   var currencyInputInnerTextField = parent.find("input");
//   currencyInputInnerTextField.element.value = 13.467;
//   currencyInputInnerTextField.trigger("input");

//   expect(parent.vm.price).toBe(13.46);
// });
