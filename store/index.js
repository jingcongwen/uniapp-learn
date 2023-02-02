import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		//公共的变量，这里的变量不能随便修改，只能通过触发mutations的方法才能改变
		requestLoading: true //加载等待是否显示
	},
	mutations: {
		//相当于同步的操作
		//显示请求加载动画
		request_show_loading(state) {
			state.requestLoading = true
		},
		//隐藏请求加载动画
		request_hide_loading(state) {
			state.requestLoading = false
		}
	},
	actions: {
		//相当于异步的操作,不能直接改变state的值，只能通过触发mutations的方法才能改变
	}
})
export default store
