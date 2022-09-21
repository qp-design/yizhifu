import Goods from "./goods.vue"

Goods.install = function(Vue) {
  Vue.component(Goods.name, Goods)
}

export default Goods
