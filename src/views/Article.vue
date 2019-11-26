<template>
	<div class="container">
		<div class="yv-col-8">
			<div class="article-list" v-for="(item, index) in articlesVo" :key="index">
				<div class="main">
					<div class="content">
						<p style="font-weight:600;font-size: 16px;">
							<router-link :to="{path:'/article/'+item.article.id}">{{ item.article.title }}</router-link>
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
			
			<div class="yv-col-8">
				<button class=" yv-btn yv-btn-large yv-btn-dlime " @click="loadMore">点击加载更多</button>
			</div>
		</div>
		<div class="yv-col-4"></div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			articlesVo: [],
			users: [],
			currentPage: 1,
            count: 4
		};
	},
	created() {
		this.axios.get(this.GLOBAL.baseUrl + '/article',{
			params: {
								page: this.currentPage,
								count: this.count
							}
		}).then(res => {
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
		},
		loadMore() {
					this.currentPage = this.currentPage + 1;
					this.axios
						.get(this.GLOBAL.baseUrl + '/article', {
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
								this.articles.splice(this.currentPage * this.count, 0, temp[i]);
							}
							console.log(this.articlesVo.length);
						});
				},
				go(page) {
			window.location.href = page;
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
</style>
