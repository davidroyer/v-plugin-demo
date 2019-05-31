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

### Added `globals` property to output for Quill




## Snippets

```html
<style>
@import "~/src/assets/editor.css";
</style>
```