import Vue from 'vue'
import App from './App.vue'

// 设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false

//// ^2_3^ 渲染挂载
new Vue({
  render: h => h(App),
}).$mount('#app')
