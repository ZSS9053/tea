<template>
<div class="login">
    <div class="header"><i class="arrow" @click="goBack"></i>登录</div>
    <div class="content">
        <input type="text" class="phone" placeholder="请输入手机号" v-model="phone" @blur="checkPhone"></br>
        <div class="help_phone"><span  v-show="isPhone">请输入正确的手机格式</span></div>
        <input type="password" class="upwd" placeholder="请输入密码" v-model="upwd"  @blur="checkUpwd"></br>
        <div class="help_box">
            <span  v-show="isRight">手机号码或者密码不正确，请重新输入</span>
            <span v-show="isUpwd">请输入密码,至少6位</span>
        </div>
        <button @click="login">立&nbsp;即&nbsp;登&nbsp;录</button>
        <div class="toReg">还没注册？&nbsp;<router-link to="/register">立即注册</router-link></div>
        <div class="loginSucc" v-show="loginSucc">
            <div class="sContent">
                登录成功 <span>{{time}}</span> 秒后返回
            </div>
        </div>
    </div>
</div>
</template>



<script>
    export default{
        data:function(){
            return{
                phone:"",
                upwd:"",
                isPhone:false,
                isRight:false,
                isUpwd:false ,
                time:2,
                loginSucc:false
            }
        },
        methods:{
            goBack(){
                this.$router.go(-1);
            },
            checkPhone(){
                var reg= /^1(3|4|5|7|8)\d{9}$/;
                if(!reg.test(this.phone)){
                        this.isPhone=true;
                }else{
                       this.isPhone=false;
                }
             },
            checkUpwd(){
                var reg=/^[a-zA-Z\d]{6,}$/;
                if(!reg.test(this.upwd)){
                    this.isUpwd=true;         
                }else{
                    this.isUpwd=false;
                }
            },
            login(){ 
                 if(!this.isUpwd & !this.isPhone & this.upwd!="" &this.phone!=""){
                 this.$http.get("data/login.php?phone="+this.phone+"&upwd="+this.upwd).then((res)=>{
                        if(res.data.code==200){
                            this.loginSucc=true;
                            var uid = res.data.uid;
                            localStorage.setItem('uid',uid);
                            var timer=setInterval(()=>{
                                this.time--;
                                if(this.time==0){
                                    clearInterval(timer);
                                    timer=null;
                                    this.loginSucc=false;
                                    this.$router.go(-1);
                                }
                            },1000)
                        }else{
                            this.isRight=true;
                        }
                 })
                }
             }
        }
    }
</script>

<style>
.login .header{
    position:fixed;
    right:0;
    left:0;
    top:0;
    height:5rem;
    line-height:5rem;
    font-size:2.5rem;
    background:#fff;
    text-align:center;
    border-bottom:.1rem solid #ddd;
}
.login  .arrow{
    width:5rem;
    height:5rem;
    float:left;
    background:url("../assets/img/arrow.png") no-repeat center center;
}
.login  .content{
    margin-top:10rem;
}
.login  input{
    width:80%;
    height:5rem;
    border-radius:2%;
    padding-left:4rem;
    font-size:2rem;
    margin-top:1rem;
    outline:none;
}
.login  .phone{
    background:url("../assets/img/user2.png") no-repeat left center ;
 }
 .login  .upwd{
     background:url("../assets/img/upwd.png") no-repeat left center;
 }
.login  button{
    width:92%;
    height:5rem;
    background:#00B369;
    outline:none;
    border:none;
    font-size:2rem;
    color:#fff;
    margin-top:1rem;
}
.login  .help_box,.help_phone{
    padding:.5rem 3rem 0 3rem;
    font-size:1.5rem;
    text-align:left;
    color:#FF714E;
    height:1.5rem;
}
.login  .loginSucc{
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    left:0;
    background:rgba(0,0,0,.4);
}
.login .sContent{
    width:60%;
    height:16rem;
    background:#F1F1F1;
    border-radius:1rem;
    position:absolute;
    top:35%;
    left:20%;
    line-height:15rem;
    font-size:2rem;
}
.login .toReg{
    line-height:5rem;
    font-size:1.3rem;
    padding-left:2rem;
    text-align:left;
}
</style>