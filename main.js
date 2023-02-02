import App from './App'
import Vue from 'vue'
import store from './store/index.js'
Vue.prototype.$store = store

//请求加载组件
import requestLoading from './components/donghua/index.vue'
//组件挂载到全局，方便每个页面使用
Vue.component('requestloading', requestLoading)

//挂载到全局显示、隐藏请求加载动画
function showLoading() {
	store.commit('request_show_loading')
}

function hideLoading() {
	store.commit('request_hide_loading')
}

Vue.prototype.$showLoading = showLoading //全局显示动画可以通过this.$showLoading
Vue.prototype.$hideLoading = hideLoading //全局隐藏动画可以通过this.$hideLoading



Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()

// import {
// 	createSSRApp
// } from 'vue'
// export function createApp() {
// 	const app = createSSRApp(App)
// 	return {
// 		app
// 	}
// }
