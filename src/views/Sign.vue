<template>
	<div class="body">
		<p><router-link to="/">博客园</router-link></p>
		<div class="box yv-shadow">
			<div class="tab">
				<span class="tab-item" :class="{ active: isActive }" @click="changeTab">登录</span>
				<span class="tab-item" :class="{ active: !isActive }" @click="changeTab">注册</span>
			</div>
			<div class="login-box" v-show="show && selected === 0">
				<div class="container">
					<label>{{mobileTip}}</label>
					<input type="username" class="text" placeholder="请输入手机号" maxlength="11" v-model="userDto.mobile" />
					<label class="verify-label">{{verifyTip}}</label>
					<input type="password" class="text" placeholder="请输入密码" v-model="userDto.password" autofocus="autofocus" />
				</div>
				<div class="option">
					<span>
						<input type="checkbox" />
						记住我
					</span>
					<span>登陆遇到问题?</span>
				</div>
				<div><button class="btn" @click="signIn()">登录</button></div>
				<div class="topic"><span>社交账号登录</span></div>
				<div class="bottom">
					<i class="iconfont" style="color:#46BB36;">&#xe729;</i>
					<i class="iconfont" style="color:#F9605F;">&#xe6bc;</i>
					<i class="iconfont" style="color:#3A8BCE">&#xe6d2;</i>
				</div>
			</div>
			<div class="login-box" v-show="show && selected === 1">
				<div class="text-field">
					<input type="username" class="text" placeholder="请输入手机号" maxlength="11" />
					<input type="password" class="text" placeholder="请输入密码" />
					<input type="password" class="text" placeholder="再次确认密码" />
				 </div>
				 <div class="verify">
					<input type="text" style="border-radius: 10px;width: 45%;height: 40px;" placeholder="请输入验证码" />
					<button class="yv-btn yv-btn-nomal yv-btn-dblue">验证码</button>
					</div>
					<button class="btn">注册</button>

			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			
			isActive: true,
			show: true,
			selected: 0,
			time: 3,
			showT: false,
			msg: '获取验证码',
			//定时器
			timer: null,
			mobileTip: ' ',
			verifyTip:' ',
			userDto: {
				mobile: '',
				password: ''
			}
		};
	},
	created() {},
	methods: {
		changeTab: function() {
			this.isActive = !this.isActive;
			this.selected = this.selected == 0 ? 1 : 0;
		},
		signIn() {
			this.axios.post('http://localhost:8080/api/sign-in', JSON.stringify(this.userDto)).then(response => {
				// alert(response.data.msg);
				if (response.data.msg == '登录成功') {
					//将后台的用户信息存入本地存储
					localStorage.user = JSON.stringify(response.data.data);
					//路由跳转到首页
					this.$router.push('/');
				}
			});
		},
		// showToast() {
		// 	if (!this.timer) {
		// 		this.timer = setInterval(() => {
		// 			if (this.time > 0 && this.time <= 5) {
		// 				this.time--;
		// 				if (this.time != 0) {
		// 					this.showT = true;
		// 				} else {
		// 					clearInterval(this.timer);
		// 					this.time = 3;
		// 					this.timer = null;
		// 					this.showT = false;
		// 				}
		// 			}
		// 		}, 1000);
		// 	}
		// }
	},
	computed: {}
};
</script>

<style scoped>
	input{
		text-align: center;
		font-size:16px;
	}
@font-face {
	font-family: 'iconfont';
	src: url('//at.alicdn.com/t/font_1434145_2tr7k0k4ynd.eot');
	src: url('//at.alicdn.com/t/font_1434145_2tr7k0k4ynd.eot?#iefix') format('embedded-opentype'), url('//at.alicdn.com/t/font_1434145_2tr7k0k4ynd.woff2') format('woff2'),
		url('//at.alicdn.com/t/font_1434145_2tr7k0k4ynd.woff') format('woff'), url('//at.alicdn.com/t/font_1434145_2tr7k0k4ynd.ttf') format('truetype'),
		url('//at.alicdn.com/t/font_1434145_2tr7k0k4ynd.svg#iconfont') format('svg');
}
.iconfont {
	font-family: 'iconfont' !important;
	font-size: 40px;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-webkit-text-stroke-width: 0.2px;
	-moz-osx-font-smoothing: grayscale;
	cursor: pointer;
}
.login-box {
	height: 90%;
}
.body {
	height: 600px;
}
.tab-item {
	line-height: 40px;
	cursor: pointer;
}
.active {
	color: #ea6f5a;
	font-weight: 600;
	border-bottom: #ea6f5a solid 2px;
}
p {
	font-size: 50px;
	font-weight: 600;
	margin-top: 3%;
	margin-left: 2%;
	font-family: KaiTi;
	color: #ea6f5a;
}
.box {
	margin-left: 35%;
	margin-right: 35%;
	width: 30%;
	height: 400px;
	border-radius: 10px;
	background-color: #f5f5f5;
}
.tab {
	display: flex;
	height: 10%;
	justify-content: space-around;
	align-items: center;
	border-radius: 10px;
}
.container {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	border-radius: 10px;
	height: 40%;
}
.text {
	width: 65%;
	height: 40px;
	border-radius: 10px;
}
.option {
	display: flex;
	justify-content: space-between;
	color: #9e9e9e;
	margin-left: 8%;
	margin-right: 8%;
}
.btn {
	height: 40px;
	width: 75%;
	background-color: #3194d0;
	border-radius: 20px;
	color: white;
	margin-left: 12%;
	margin-top: 3%;
}
.bottom {
	margin-top: 3%;
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.topic {
	margin-top: 3%;
	display: flex;
	justify-content: center;
}
.text-field{
	height: 50%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
}
.verify{
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
