import VueCompositionAPI from "@vue/composition-api";
import {VueConstructor} from "vue";

/**
 * @param {VueConstructor} Vue
 */
export default function (Vue) {
  Vue.use(VueCompositionAPI);
}
