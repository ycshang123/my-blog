<template>
		<div class="header">
			<h1>博客园</h1>
				<ul>
					<li><router-link to="/a">文章</router-link><li>
					<li><router-link to="/c">专题</router-link></li>
					<li><router-link to="/u">用户</router-link></li>
					<li  v-if="!this.user"><router-link to="/sign">登录</router-link></li>
					<li  v-if="this.user">
						<router-link to="/profile"><img :src="this.user.avatar" class="avatar"></router-link>
						</li>
					<li class="nav-item" v-if="this.user" @click="logout" id="logout">退出</li>
				</ul>
			</div>
		</div>
		<!-- <div class="nav-bar back-color">
			<div class="container">
				<h1 class="brand"><router-link to="/">博客</router-link></h1>
				<ul class="nav">
					<li class="nav-item"><router-link to="/p">文章</router-link></li>
					<li class="nav-item"><router-link to="/c">专题</router-link></li>
					<li class="nav-item"><router-link to="/u">用户</router-link></li>
					<li class="nav-item" v-if="!this.user"><router-link to="/sign">登录</router-link></li>
					<li class="nav-item" v-if="this.user">
						<router-link to="/profile"><img :src="this.user.avatar" class="avatar"></router-link>
						</li>
					<li class="nav-item" v-if="this.user" @click="logout" id="logout">退出</li>
				</ul>
			</div>
		</div>
		<router-view class="yv-container" />
		<footer></footer>
		</router-view> -->
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		created() {
			
		},
		methods: {
			
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
		height:50px;
		background-color: #e1f5fe;
		justify-content: space-around;
	}
	ul{
		width:30%;
		justify-content: space-around;
		align-items: center;
		color:#2979ff;
		font-size: 20px;
	}
</style>