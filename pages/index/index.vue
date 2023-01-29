<template>
	<view class="content">
		<view class="text-area">
			<view v-model="list" v-for="(item,index) in list" :key="item">
				{{item}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: ''
			}
		},
		created() {

		},
		onLoad() {
			this.get()

		},
		methods: {
			async get() {
				await uni.request({
					url: 'https://zj.v.api.aa1.cn/api/bk/?num=5&type=json',
					method: 'GET',
					success: res => {
						this.list = res.data.content
					}

				})

			}
		},


	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: row;
	}
</style>
