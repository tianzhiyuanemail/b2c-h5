<template>
	<div class="my_l">
		<header class="top_bar">
		    <a onclick="window.history.go(-1)" class="icon_back"></a>
		    <h3 class="cartname">京东登录</h3>
		</header>
		<main class="user_login_box">
		    <div class="login_dialog">
		        <div class="_username">
		            <input type="text" name="username" placeholder="请输入用户名" class="user_input" v-model="username"/>
		        </div>
		        <div class="_username u_passwd">
		            <input type="password" name="password" placeholder="请输入密码" class="user_input" v-model="password"/>
		        </div>

		        <div class="login_box">
		            <a @click="goLogin()" class="btn_login">登录</a>
		        </div>
		        <div class="go_reg_box">
		            <router-link tag="span" to="/register">快速注册</router-link>
		        </div>
		    </div>
		</main>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				username:'',
				password:'',
				userInfo:{}
			}
		},
		methods:{
			goLogin(){
                let _this = this;
                _this.axios.get('api/member/login',{
                    params: {
                        userName:_this.username,
                        passWord:_this.password
                    }
				})
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (response) {
                        console.log(response);
                    });
			// 	let _this = this;
			//
			// 	if(_this.username ==''){
			// 		alert('请输入用户名');
			// 	}else if(_this.password == ''){
			// 		alert('请输入密码');
			// 	}else{
			// 		_this.$http.get('api/member/login',
			// 			{
			// 			   params:{'userName':_this.username,
			// 					   'passWord':_this.password,}
			// 			},
			// 			{emulateJSON:true}
			// 		).then((res)=>{
             //            console.log(res);
			// 		},(err)=>{
			// 			console.log(err);
			// 		});
			// 	}
				
			}
		}
	}
</script>
<style>
@import '../assets/css/login.css';
</style>