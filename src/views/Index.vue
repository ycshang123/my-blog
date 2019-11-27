<template>
	<div class="container">
		<div class="yv-col-8">
			<div class="topic">
				
			</div>
			<div class="article-list" v-for="(item, index) in articlesVo" :key="index">
				<div class="main">
					<div class="content">
						<p style="font-weight:600;font-size: 16px;">
							<router-link :to="{ path: '/article/' + item.article.id }">{{ item.article.title }}</router-link>
						</p>
						<br />
						<p style="color: #9e9e9e;font-size: 14px;">{{ item.article.intro }}</p>
					</div>
					<div class="avatar"><img :src="item.article.cover" /></div>
				</div>
				<div class="logo">
					<span style="margin: 6px;">
						<i class="iconfont" style="color:#EDC1C5">&#xe60d;</i>
						{{ item.article.diamond }}
					</span>
					<span style="margin: 6px;">{{ item.author.nickname }}</span>
					<span style="margin: 6px;">
						<i class="iconfont ">&#xe60a;</i>
						{{ item.article.comments }}
					</span>
					<span style="margin: 6px;">
						<i class="iconfont">&#xe8ad;</i>
						{{ item.article.likes }}
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
				<br />
				<h2>热门作者</h2>
			</div>
			<div class="author-list">
				<div class="author yv-shadow" v-for="(item, index) in users" :key="index">
					<div class="author-avatar"><img :src="item.avatar" /></div>
					<div class="author-text">
						<p>{{item.nickname}}</p>
						<div class="author-texts">
							<span>{{item.follows}}</span>
							<span>{{item.fans}}</span>
							<span>{{item.articles}}</span>
						</div>
					</div>
					<button class="yv-btn yv-btn-nomal yv-btn-blue">关注</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			articlesVo: [],
			users: []
		};
	},
	created() {
		this.axios.get(this.GLOBAL.baseUrl + '/article').then(res => {
			// console.log(res.data.data);
			this.articlesVo = res.data.data;
			for (var i = 0; i < this.articlesVo.length; i++) {
				this.articlesVo[i].cover = this.getImage(this.articlesVo[i].cover);
			}
		});
		this.axios.get(this.GLOBAL.baseUrl + '/user').then(res => {
			this.users = res.data.data;
		});
	},
	methods: {
		getImage(url) {
			return 'https://images.weserv.nl/?url=' + url;
		}
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
	height: 100px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin-bottom:10px ;
	background-color: #fafafa;
	border-radius: 10px;
}
.author-avatar {
	width: 18%;
	height: 70px;
}
.author-avatar img {
	height: 100%;
	width: 100%;
	border-radius: 50px;
}
.author-text {
	width: 45%;
}
.author-texts{
	display: flex;
	justify-content: space-around;
	font-size:16px;
	color: #bdbdbd;
}
.topic{
	height: 300px;
	border: 2px solid #4CAF50;
	width: 100%;
}
</style>
