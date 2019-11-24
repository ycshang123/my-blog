<template>
	<div class="container">
		<div class="yv-col-8">
			<div class="article-list" v-for="(article, index) in articles" :key="index">
				<div class="main">
					<div class="content">
						<p style="font-weight:600;font-size: 16px;"><router-link to="articleDetail">{{article.title}}</router-link></p>
						<br />
						<p style="color: #9e9e9e;font-size: 14px;">{{article.intro}}</p>
					</div>
					<div class="avatar"><img :src="article.cover" /></div>
				</div>
				<div class="logo">
					<span style="margin: 6px;">
						<i class="iconfont" style="color:#EDC1C5">&#xe60d;</i>
						{{article.diamond}}
					</span>
					<span style="margin: 6px;">{{article.nickname}}</span>
					<span style="margin: 6px;">
						<i class="iconfont ">&#xe60a;</i>
						{{article.comments}}
					</span>
					<span style="margin: 6px;">
						<i class="iconfont">&#xe8ad;</i>
						{{article.likes}}
					</span>
				</div>
			</div>
		</div>
		<div class="yv-col-4">
			<div class="classify">
				<h2>热门专题</h2>
				<button class="yv-btn yv-btn-large yv-btn-yellow">日常随笔</button>
				<button class="yv-btn yv-btn-nomal yv-btn-dyellow">童话</button>
				<button class="yv-btn yv-btn-nomal yv-btn-green">青春</button>
				<button class="yv-btn yv-btn-large yv-btn-dgreen">交互设计</button>
				<button class="yv-btn yv-btn-nomal yv-btn-blue">编程</button>
				<button class="yv-btn yv-btn-nomal yv-btn-mblue">算法</button>
				<button class="yv-btn yv-btn-nomal yv-btn-dblue">通信</button>
				<button class="yv-btn yv-btn-nomal yv-btn-lime">历史</button>
				<button class="yv-btn yv-btn-nomal yv-btn-mlime">养生</button>
				<button class="yv-btn yv-btn-nomal yv-btn-dlime">更多>></button>
				<br>
				<h2>热门作者</h2>
			</div>
			<!-- <div class="author">
			<div class="author-avatar"></div>	
			<div class="author-list"></div>
			</div> -->
			<!-- <div class="author" v-for="(user,index) in users.slice(1,8)" :key="index">
				<div class="author-list">
				<div class="user-avater">
				<img :src= "user.avater">	
				</div>
				<div class=""></div>
				</div>
			</div> -->
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			articles: []
		};
	},
	created() {
		this.axios.get(this.GLOBAL.baseUrl + '/article').then(res => {
					// console.log(res.data.data);
					this.articles = res.data.data;
				})
		// this.axios.get('localhost:8080/api/article').then(res => {
			// console.log(res.data.data);
			// this.articles = res.data.data;
			// localStorage.articles = JSON.stringify(res.data.data);
			// for (var i = 0; i < this.articles.length; i++) {
			// 	this.articles[i].cover = this.getImage(this.articles[i].cover);
			// }
		// })
		
	},
	methods: {
		// getImage(url) {
		// 	return 'https://images.weserv.nl/?url=' + url;
		// }
	},
	computed: {}
};
</script>

<style scoped>
@font-face {
	font-family: 'iconfont'; /* project id 1434145 */
	src: url('//at.alicdn.com/t/font_1434145_q9nx8prjhii.eot');
	src: url('//at.alicdn.com/t/font_1434145_q9nx8prjhii.eot?#iefix') format('embedded-opentype'), url('//at.alicdn.com/t/font_1434145_q9nx8prjhii.woff2') format('woff2'),
		url('//at.alicdn.com/t/font_1434145_q9nx8prjhii.woff') format('woff'), url('//at.alicdn.com/t/font_1434145_q9nx8prjhii.ttf') format('truetype'),
		url('//at.alicdn.com/t/font_1434145_q9nx8prjhii.svg#iconfont') format('svg');
}
.iconfont {
	font-family: 'iconfont' !important;
	font-size: 16px;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-webkit-text-stroke-width: 0.2px;
	-moz-osx-font-smoothing: grayscale;
	cursor: pointer;
}
.container {
	display: flex;
	margin-top: 20px;
}
.article-list {
	display: flex;
	flex-direction: column;
	margin-top: 20px;
	width: 90%;
	height: 180px;
	justify-content: space-around;
}
.content {
	width: 90%;
	height: 150px;
	margin: 10px;
}
.avatar {
	width: 30%;
	height: 150px;
	margin: 10px;
}
.avatar img {
	border-radius: 10px;
	width: 100%;
	height: 100%;
}
.logo {
	display: flex;
	color: #aaaaaa;
	font-size: 12px;
}
.main {
	width: 100%;
	height: 160px;
	display: flex;
}
.classify {
	width: 80%;
	height: 300px;
}
.author {
	width: 90%;
	height: 600px;
}
.author-list{
	width:80%;
	height: 150px;
	display: flex;
	justify-content: space-around;
}
.user-avater{
	width: 50px;
	height: 50px;
	border-radius: 50px;
}
</style>
