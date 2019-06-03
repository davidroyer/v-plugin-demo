import Quill from "quill";
import Editor from "@/components/Editor.vue";
import VueEditor from "@/components/VueEditor.vue";

const version = "__VERSION__";

const install = Vue => {
  /*
   * NOTE:
   *   if you need to extend Vue contstructor, you can extend it in here.
   */

  Vue.prototype.$add = (a, b) => {
    return a + b;
  };

  /*
   * NOTE:
   *  somthing implementation here ...
   */
  Vue.component("Editor", Editor);
  Vue.component("VueEditor", VueEditor);
};

const plugin = {
  install,
  version,
  Quill
};

export default plugin;
export { VueEditor, Editor, Quill };

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(plugin);
}
