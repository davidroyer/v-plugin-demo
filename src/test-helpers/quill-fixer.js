export default function() {
  global.MutationObserver = class {
    constructor(callback) {}
    disconnect() {}
    observe(element, initObject) {}
    takeRecords() {
      return [];
    }
  };
  global.document.getSelection = function() {};
}
