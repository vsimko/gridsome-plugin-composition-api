# gridsome-plugin-vue2-composition-api

> Composition API for Gridsome with Vue2

### Quick overview

This plugin enables Composition API inside your Gridsome project even though Gridsome currently relies on Vue2.
Once Gridsome migrates to Vue3 this plugin becomes obsolete, but you'll have an easier migration path.

### Install

Use yarn or npm to install it:

* `yarn add -D gridsome-plugin-vue2-composition-api`
* `npm install -D gridsome-plugin-vue2-composition-api`
* add `gridsome-plugin-vue2-composition-api` in `devDependencies` section in your `package.json` file.

### Usage

Add `gridsome-plugin-vue2-composition-api` in your `gridsome.config`

```javascript
module.exports = {
  plugins: [
    {
      use: 'gridsome-plugin-vue2-composition-api',
    }
  ]
}
```

Now you can use Composition API in your *.vue files and other *.js or *.ts files:
```html
<script lang="ts">
  import {defineComponent, computed} from "@vue/composition-api";

  export default defineComponent({
    props: {
      title: { type:String, required:true }
    }     
    setup(props) {
      const titleUpper = computed(() => props.title.toUpperCase());
      return {
          titleUpper,
      }
    }
  });
</script>
```
