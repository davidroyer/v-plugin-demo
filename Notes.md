## For Build With Seperated CSS

```js
import {VuePlugin} from 'vue2-editor/modular'
```

## For Releasing & Publishing

`standard-version` has Lifecycle scripts that make it much easier

```json
  "standard-version": {
    "scripts": {
      "postbump": "yarn vue-cli-service build && git add -A && git commit -m 'chore: new build'",
      "posttag": "git push --follow-tags"
    }
  },
```

## For Commits

I figured out that I don't need to try to escape backticks for inline code. Here's an example of using code and emojis:

```bash
 git commit -am 'fix: :bug: fixes emoji in `CHANGELOG.md`'
```


## Rollup

> Modification have been made to `vue-cli-p11n`

### Default & Named Exports

**Note:** Needed to set `named` option in in `output` of `p11n` entry file to get default and named exports

<br>

### This allowed aliases to work for `.vue`. and `.js` files when building

```js
{
    resolve: [".css", ".js", ".vue"],
        "@": path.resolve(process.cwd(), "src")
    })
}
```

<br>

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

### Build & Release

This allows me to commit build files with release files

```bash
# Inside package.json
{
  "standard-version": {
    "scripts": {
      "postbump": "yarn vue-cli-service build && git add -A && git commit -m 'chore: new build'"
    }
  }
}
```

> **See `standard-version` [Lifecycle Scripts](https://github.com/conventional-changelog/standard-version#lifecycle-scripts)**  

## What I Now Know About The Bundling Process

### UMD

UMD is sort of like a swiss-army-knife. It can handle multiple situation. This is why you'll sometimes see a library be published and only built with the UMD type. This is what Vue2Editor was originally when using Poi 9 I believe.

For our purposes, it serves as the version we use when our plugin is loaded via `script` tag.

### CommonJS

CommonJS is for the situations where you don't have a bundled like Webpack or Rollup.

### ESM

Bundlers like Webpack and Rollup can use this version. They do this happens by picking up on the value of the `module` property in your plugin's `package.json`.

This allows for Tree-Shaking (I've never set this up before though).
