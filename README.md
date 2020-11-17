# gridsome-plugin-composition-api

> Composition API for Gridsome with Vue2

### Quick overview

This plugin enables Composition API inside your Gridsome project even though Gridsome currently relies on Vue2.
Once Gridsome migrates to Vue3 this plugin becomes obsolete, but you'll have an easier migration path.

### Why you need this plugin

> Why not just registering the `VueCompositionAPI` inside your `src/main.js` file ?

If you did that, the composition API will not be available until the initialization function finishes.
This might be a problem if you wanted to implement a reactive store using composition api as a lightweight alternative to Vuex.
However, this plugin is called before `src/main.js`, thus the Composition API is already available during the initialization phase.

### Install

Use yarn or npm to install it:

* `yarn add -D gridsome-plugin-composition-api`
* `npm install -D gridsome-plugin-composition-api`
* add `gridsome-plugin-composition-api` in `devDependencies` section in your `package.json` file.

### Usage

Add `gridsome-plugin-composition-api` in your `gridsome.config`

```javascript
module.exports = {
  plugins: [
    {
      use: 'gridsome-plugin-composition-api',
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

### Possible stuff to come ...

Accessing `$static` and `$page` Vue global variables needs to be done differently in Composition API.
In my other codebase, I already have functions `usePageQuery()` and `useStaticQuery()`.
I might publish them as a part of this package if someone requests it.

Here is my work-in-progress implementation in TypeScript:

```typescript
export function useStaticQuery<T>() {
  type ComponentWith$Static = ReturnType<typeof getCurrentInstance> & { $static: T };
  return computed(() => {
    const thisComponent = getCurrentInstance() as ComponentWith$Static;
    return thisComponent.$static;
  })
}

export function usePageQuery<T>() {
  type ComponentWith$Page = ReturnType<typeof getCurrentInstance> & { $page: T };
  return computed(() => {
    const thisComponent = getCurrentInstance() as ComponentWith$Page;
    return thisComponent.$page;
  })
}
```
