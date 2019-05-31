## For Commits

[Repo: git-commit-message-convention](https://github.com/kazupon/git-commit-message-convention)

### Example commit msg

```bash
:chart_with_upwards_trend: performance(graphite): remove graphiteWidth option

The graphiteWidth option has been removed. The default graphite width of 10mm is always used for performance reason.
```

## Rollup

> Modification have been made to `vue-cli-p11n`

### This allowed aliases to work for `.vue`. and `.js` files when building

```js
{
    resolve: [".css", ".js", ".vue"],
        "@": path.resolve(process.cwd(), "src")
    })
}
```

### To pull CSS out into its own files

Two things need to happen for this:

1. Set `css: false` in the the config for the `rollup-plugin-vue`.
   In most exaples this plugin is referenced by `vue()` but `p11n`
   set this as `VuePlugin()`. This tells Rollup to not add styles via `document.style`

2. Now we use Rollup to get the css and output it just by adding `css()` to the plugins

Added `rollup-plugin-css-only`.

`const css = require("rollup-plugin-css-only")`

### Added `globals` property to output for Quill

===

## Snippets

```html
<style>
  @import "~/src/assets/editor.css";
</style>
```
