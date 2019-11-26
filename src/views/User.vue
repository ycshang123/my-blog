<template>
	<div class="container">
		<div class="row">
			<div class="user-box" v-for="(item, index) in users" :key="index">
				<div class="avatar"><img :src="item.avatar" /></div>
				<div class="summary">
					<h2>{{ item.nickname }}</h2>
					<p>{{ item.introduction }}</p>
					<button class="yv-btn yv-btn-large yv-btn-dblue">+关注</button>
				</div>
			</div>
		</div>
		<div class="row">
		<button class="yv-btn yv-btn-large yv-btn-dlime" @click="loadMore">点击加载更多</button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			users: [],
			currentPage: 1,
			count: 6
		};
	},
	created() {
		this.axios
			.get(this.GLOBAL.baseUrl + '/user', {
				params: {
					page: this.currentPage,
					count: this.count
				}
			})
			.then(res => {
				console.log(res.data.data.length);
				this.users = res.data.data;
			});
	},
	methods: {
		loadMore() {
			this.currentPage = this.currentPage + 1;
			this.axios
				.get(this.GLOBAL.baseUrl + '/user', {
					params: {
						page: this.currentPage,
						count: this.count
					}
				})
				.then(res => {
					console.log(res.data.data.length);
					let temp = [];
					temp = res.data.data;
					for (var i = 0; i < temp.length; i++) {
						this.users.splice(this.currentPage * this.count, 0, temp[i]);
					}
					console.log(this.users.length);
				});
		},
		go(page) {
			window.location.href = page;
		}
	}
};
</script>

<style scoped>
.container {
	width: 80%;
	margin: 0 auto;
}
.row {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	margin-top: 100px;
}
.user-box {
	width: 30%;
	height: 300px;
	margin-bottom: 60px;
	border: 1px solid #009688;
	border-radius: 10px;
	display: flex;
	align-items: center;
	flex-direction: column;
}
.avatar {
	width: 80px;
	height: 80px;
	margin-top: -50px;
}
.avatar img {
	width: 100%;
	height: 100%;
	border-radius: 50px;
}
.summary {
	margin: 20px;
	height: 160px;
	display: flex;
	justify-content: space-around;
	flex-direction: column;
	align-items: center;
}
</style>
