<template>
	<div>
		<div class="header">
				<h1>博客园</h1>
					<ul>
						<li><router-link to="/">主页</router-link></li>
						<li><router-link to="a">文章</router-link><li>
						<li><router-link to="c">专题</router-link></li>
						<li><router-link to="u">用户</router-link></li>
					</ul>
					<ul>	
						<li  v-if="!this.user"><router-link to="/sign">登录</router-link></li>
						<li  v-if="this.user">
							<router-link to="/profile"><img :src="this.user.avatar" class="avatar"></router-link>
							</li>
						<li class="nav-item" v-if="this.user" id="logout" @click="logout()">退出</li>
					</ul>
		</div>
		<router-view class="yv-container"/>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			user:JSON.parse(localStorage.user)	
			}
		},
		created() {
			if(this.user){
				console.log(this.user)
			};
			
		},
		methods: {
			logout(){
				this.user = null
			}
			
		},
		computed: {
			
		}
		
	}
</script>


<style scoped> 
	h1{
	color:#90caf9; 
	}
	.header{
		display: flex;
		height:80px;
		background-color: #e1f5fe;
		justify-content: space-around;
		align-items: center;
	}
	ul{
		width:30%;
		justify-content: space-around;
		align-items: center;
		color:#2979ff;
		font-size: 20px;
	}
	.avatar{
		width: 50px;
		height: 50px;
		border-radius: 50px;
	}
	.article-list{
		width:80%;
		height: 200px;
		background-color: red;
	}
</style>