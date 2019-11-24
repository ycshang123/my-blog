<template>
	<div>
		<div class="header">
			<h1>博客园</h1>
			<ul>
				<li><router-link to="/">主页</router-link></li>
				<li><router-link to="a">文章</router-link></li>
				<li></li>
				<li><router-link to="c">专题</router-link></li>
				<li><router-link to="u">用户</router-link></li>
			</ul>
			<div class="input-box">
				<i class="iconfont">&#xe614;</i>
				<input type="text" class="text" placeholder="请输入感兴趣的内容"/>
			</div>
			<ul>
				<li v-if="!this.user"><router-link to="/sign">登录</router-link></li>
				<li v-if="this.user">
					<router-link to="/profile"><img :src="this.user.avatar" class="avatar" /></router-link>
				</li>
				<li class="nav-item" v-if="this.user" id="logout" @click="logout()">退出</li>
			</ul>
		</div>
		<router-view class="yv-container" />
	</div>
</template>

<script>
export default {
	data() {
		return {
			user: JSON.parse(localStorage.user)
		};
	},
	created() {
		if (this.user) {
			console.log(this.user);
		}
	},
	methods: {
		logout() {
			this.user = null;
		}
	},
	computed: {}
};
</script>

<style scoped>
@font-face {
	font-family: 'iconfont'; /* project id 1434145 */
	src: url('//at.alicdn.com/t/font_1434145_oe0w2hkgha.eot');
	src: url('//at.alicdn.com/t/font_1434145_oe0w2hkgha.eot?#iefix') format('embedded-opentype'), url('//at.alicdn.com/t/font_1434145_oe0w2hkgha.woff2') format('woff2'),
		url('//at.alicdn.com/t/font_1434145_oe0w2hkgha.woff') format('woff'), url('//at.alicdn.com/t/font_1434145_oe0w2hkgha.ttf') format('truetype'),
		url('//at.alicdn.com/t/font_1434145_oe0w2hkgha.svg#iconfont') format('svg');
}
.iconfont {
	font-family: 'iconfont' !important;
	font-size: 22px;
	font-style: normal;
	color: #aaa;
	-webkit-font-smoothing: antialiased;
	-webkit-text-stroke-width: 0.2px;
	-moz-osx-font-smoothing: grayscale;
}
h1 {
	color: #90caf9;
}
.header {
	display: flex;
	height: 80px;
	background-color: #e1f5fe;
	justify-content: space-around;
	align-items: center;
}
ul {
	width: 30%;
	justify-content: space-around;
	align-items: center;
	color: #2979ff;
	font-size: 20px;
}
.avatar {
	width: 50px;
	height: 50px;
	border-radius: 50px;
}
.article-list {
	width: 80%;
	height: 200px;
	background-color: red;
}
.text {
	width: 200px;
	height: 30px;
	border-radius: 20px;
}
</style>
