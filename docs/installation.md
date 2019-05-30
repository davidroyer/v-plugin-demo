# Installation

## Direct Download / CDN

https://unpkg.com/v-plugin-demo/dist/v-plugin-demo 

[unpkg.com](https://unpkg.com) provides NPM-based CDN links. The above link will always point to the latest release on NPM. You can also use a specific version/tag via URLs like https://unpkg.com/v-plugin-demo@{{ $version }}/dist/v-plugin-demo.js
 
Include v-plugin-demo after Vue and it will install itself automatically:

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/v-plugin-demo/dist/v-plugin-demo.js"></script>
```

## NPM

```sh
$ npm install v-plugin-demo
```

## Yarn

```sh
$ yarn add v-plugin-demo
```

When used with a module system, you must explicitly install the `v-plugin-demo` via `Vue.use()`:

```javascript
import Vue from 'vue'
import v-plugin-demo from 'v-plugin-demo'

Vue.use(v-plugin-demo)
```

You don't need to do this when using global script tags.

