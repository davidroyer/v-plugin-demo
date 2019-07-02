import { shallowMount, createLocalVue } from "@vue/test-utils";
console.log("TCL: shallowMount", shallowMount);
import plugin from "../../src/index";

describe("Plugin", () => {
  it("should be 2", () => {
    // const msg = "new message";
    const localVue = createLocalVue();
    console.log("TCL: localVue", localVue);
    localVue.use(plugin);
  });
});
