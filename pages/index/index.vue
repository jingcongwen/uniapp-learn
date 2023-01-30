<template>
	<view class="">
		<view class="time">
			今天是{{time}}
		</view>
		<view class="content">

			<view class="text-area">
				<view class="item" v-model="list" v-for="(item,index) in list" :key="item">
					{{item}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: '',
				time: ''
			}
		},
		created() {
			this.get()
		},
		mounted() {
			var _this = this;
			let yy = new Date().getFullYear();
			let mm = new Date().getMonth() + 1;
			let dd = new Date().getDate();
			// let hh = new Date().getHours();
			// let mf = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes();
			// let ss = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds();
			_this.time = yy + '年' + mm + '月' + dd + '日'
			console.log(this.gettime)
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
	.time {
		margin: 20px 0 20px 0;
		display: flex;
		justify-content: center;
		font-size: 900;
		font-weight: bold;
	}

	.content {
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 100%;

	}

	.text-area {
		display: flex;
		flex-direction: column;
		width: 100%;

	}

	.item {
		display: flex;
		justify-content: center;
		margin: 10rpx;
	}
</style>
