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
					<label>{{ accountTip }}</label>
					<input type="text" class="text" placeholder="请输入手机号" v-model="userDto.mobile" required="required" @focusin="clearAccount" autofocus="autofocus" />
					<label class="verify-label">{{ passwordTip }}</label>
					<input type="password" class="text" placeholder="请输入密码" v-model="userDto.password" autofocus="autofocus" />
					<div class="verify-box">
						<input type="text" placeholder="请输入验证码" style="width: 35%;height: 40px;border-radius:10px ;" v-model="userDto.code"  />
						<img class="verify" @click="refresh" ref="codeImg" />
					</div>
				</div>
				<div class="option">
					<span>
						<input type="checkbox" />
						记住我
					</span>
					<span>登陆遇到问题?</span>
				</div>
				<div>
					<button
						class="btn"
						@click="
							signIn(userDto);
							submit();
						"
					>
						登录
					</button>
				</div>
				<div class="topic"><span>社交账号登录</span></div>
				<div class="bottom">
					<i class="iconfont" style="color:#46BB36;">&#xe729;</i>
					<i class="iconfont" style="color:#F9605F;">&#xe6bc;</i>
					<i class="iconfont" style="color:#3A8BCE">&#xe6d2;</i>
				</div>
			</div>
			<div class="login-box" v-show="show && selected === 1">
				<div class="text-field">
					<label>{{ accountTip }}</label>
					<input type="username" class="text" placeholder="请输入手机号" v-model="userDto.mobile" @focusin="clearAccount" maxlength="11" />
					<label>{{ passwordTip }}</label>
					<input type="password" class="text" placeholder="请输入密码" v-model="userDto.password" />
					<label>{{ passswordTip }}</label>
					<input type="password" class="text" placeholder="再次确认密码" v-model="password" />
				</div>
				<div class="verify">
					<input type="text" style="border-radius: 10px;width: 45%;height: 40px;" placeholder="请输入验证码" v-model="userDto.code" />
					<button class="yv-btn yv-btn-nomal yv-btn-dblue" :disabled="btnDisabled">{{ msg }}</button>
				</div>
				<button
					class="btn"
					@click="
						signUp();
						submit();
					"
				>
					注册
				</button>
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
			verifyCode: '',
			accountTip: '',
			verifyTip: '',
			passwordTip: '',
			passswordTip: '',
			btnDisabled: true,
			switchCss: false,
			fade: 2,
			showT: false,
			msg: '验证码',
			timer: null,
			userDto: {
				mobile: '',
				password: '',
				code: ''
			},
			token: ''
		};
	},
	created() {
		this.axios.get(this.GLOBAL.baseUrl + '/code', { responseType: 'blob' }).then(res => {
			var img = this.$refs.codeImg;
			let url = window.URL.createObjectURL(res.data);
			img.src = url;
			console.log(res.headers);
			//取得后台通过响应头返回的sessionId的值
			this.token = res.headers['access-token'];
			console.log(this.token);
		});
	},
	methods: {
		changeTab: function() {
			this.isActive = !this.isActive;
			this.selected = this.selected == 0 ? 1 : 0;
			this.clearAccount();
			this.clearCode();
		},
		signIn(userDto) {
			this.axios({
				method: 'post',
				url: this.GLOBAL.baseUrl + '/user/sign-in',
				data: JSON.stringify(this.userDto),
				headers: {
					'Access-Token': this.token
				}
			}).then(res => {
				alert('123')
				if (res.data.msg === '成功') {
					alert('登录成功');
					localStorage.setItem('user', JSON.stringify(res.data.data));
					this.$router.push('/');
				} else {
					// alert(res.data.msg);
					this.userDto.code = '';
				}
			});
		},
		refresh() {
			this.axios.get(this.GLOBAL.baseUrl + '/code', { responseType: 'blob' }).then(res => {
				console.log(res);
				var img = this.$refs.codeImg;
				let url = window.URL.createObjectURL(res.data.data);
				img.src = url;
			});
		},
		signUp() {
			this.axios.post('http://localhost:8080/api/sign-up', JSON.stringify(this.userDto)).then(response => {
				// alert(response.data.msg);
				if (response.data.msg == '注册成功') {
					//将后台的用户信息存入本地存储
					localStorage.user = JSON.stringify(response.data.data);
					this.$router.push('/sign');
				}
			});
		},
		clearAccount: function() {
			this.userDto.mobile = '';
			this.accountTip = '';
		},
		clearCode: function() {
			this.accountTip = '';
			this.verifyCode = '';
			this.verifyTip = '';
		},
		checkAccount: function() {
			if (this.userDto.mobile.length == 11) {
				if (!/^[34578]\d{9}$/.test(this.account)) {
					return;
				} else {
					this.switchCss = true;
				}
			} else {
				this.switchCss = false;
				return;
			}
		},
		submit: function() {
			if (this.userDto.mobile == '') {
				this.accountTip = '手机号码不能为空';
				return;
			}
			if (!/^1[345789]\d{9}$/.test(this.userDto.mobile)) {
				this.accountTip = '手机号码格式错误';
				this.account = '';
				return;
			}
			if (this.userDto.password == '') {
				this.passwordTip = '密码不能为空';
			}
			if (this.password != this.userDto.password) {
				this.passswordTip = '两次密码输入不同,请重新输入';
				this.password = '';
			}
			if ((this.verifyCode = '')) {
				this.verifyTip = '验证码不能为空';
				return;
			}
		}
	},
	computed: {}
};
</script>

<style scoped>
input {
	text-align: center;
	font-size: 16px;
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
	color: #e1f5fe;
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
	height: 50%;
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
.text-field {
	height: 50%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
}
.verify {
	display: flex;
	justify-content: center;
	align-items: center;
}

label {
	color: red;
}
.verify-box {
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.verify {
	width:20%;
	height: 40px;
}
</style>
