<template>
<div class="register">
    <div class="header"><i class="arrow" @click="goBack"></i>注册</div>
    <div class="content">
        <form>
            <label>用户名</label></br>
            <input type="text" class="uname"  v-model="uname" @blur="checkUser"/></br>
            <div class="help_box">
                <span v-show="isUserErr">用户名已存在</span>
                <span v-show="isUserK">用户名不能为空</span>
                <span v-show="isUserCan" class="canUse">用户名可用</span>
            </div>
            <label>手机号</label></br>
            <input type="text" class="phone" v-model="phone" @blur="checkPhone"/></br>
            <div class="help_box">
                <span v-show="isPhoneErr">请输入11位手机号码</span>
                <span v-show="isPhoneEx">手机号已存在</span>
                <span v-show="isPhoneCan" class="canUse">手机号可用</span>
            </div>
            <i class="right"></i>
            <label>密码</label></br>
            <input type="password" class="upwd" v-model="upwd"  @blur="checkUpwd"/>
            <div class="help_box"><span v-show="isPwd">请输入6位以上密码</span></div>
            <label>请重新输入密码</label></br>
            <input type="password" class="upwd" v-model="upwd2" @blur="checkUpwd2"/></br>
            <div class="help_box"><span v-if="isPwdErr">两次输入密码不一致</span></div>
            <i class="right"></i>
            <input type="button" value="立 即 注 册"  @click="Register"/>
            <div class="regSucc" v-show="regSucc">
                <div class="rContent">
                    注册成功 <time>{{time}}</time>秒后回首页
                </div>
            </div>
        </form>                          
    </div>
    </div>
</div>
</template>



<script>
    export default{
        data:function(){
            return{
                isPhoneErr:false,
                isPhoneEx:false,
                isUserErr:false,
                isUserK:false,
                isPwdErr:false,
                isPwd:false,
                isUserCan:false,
                isPhoneCan:false,
                regSucc:false,
                time:2,
                uname:"",
                phone:"",
                upwd:"",
                upwd2:""
            }
        },
        methods:{
            goBack(){
                this.$router.go(-1);
            },
            checkUser(){
                if(this.uname!=""){
                this.isUserK=false;
                 this.$http.get("data/checkUname.php?uname="+this.uname)
                    .then((res)=>{
                        if(res.data.code==201){
                            this.isUserErr=true;
                            this.isUserCan=false;
                        }else if(res.data.code==200){
                            this.isUserCan=true;
                            this.isUserErr=false;
                        };
                    })
                }else{
                     this.isUserK=true;
                     this.isUserCan=false;
                     this.isUserErr=false;                     
                }
             },
            checkPhone(){
                var reg= /^1(3|4|5|7|8)\d{9}$/;
                if(!reg.test(this.phone)){
                        this.isPhoneErr=true;
                        this.isPhoneEx=false;
                        this.isPhoneCan=false;
                }else{
                       this.isPhone=false;
                       this.$http.get("http://localhost/dangao/data/checkPhone.php?phone="+this.phone)
                       .then((res)=>{
                            if(res.data.code==201){
                                this.isPhoneErr=false;
                                this.isPhoneEx=true;
                                this.isPhoneCan=false;
                            }else{
                                this.isPhoneErr=false;
                                this.isPhoneEx=false;
                                this.isPhoneCan=true;
                            }
                       })
                }
             },
            checkUpwd(){
                var reg=/^[a-zA-Z\d]{6,}$/;
                if(!reg.test(this.upwd)){
                    this.isPwd=true;         
                }else{
                    this.isPwd=false;
                }
            },
            checkUpwd2(){
                if(this.upwd!=""){
                    console.log(this.upwd,this.upwd2);
                    if(this.upwd!=this.upwd2){
                        this.isPwdErr=true;
                    }else{
                        this.isPwdErr=false;
                    }
                }
            },
            Register(){
                if(this.isUserCan && this.isPhoneCan && !this.isPwdErr && this.uname!="" &&this.phone!="" && this.upwd!=""){
                    this.$http.get("http://localhost/dangao/data/register.php?phone="+this.phone+"&upwd="+this.upwd+"&uname="+this.uname)
                    .then((res)=>{
                        if(res.data.code==200){
                            this.regSucc=true;
                            var timer=setInterval(()=>{
                                this.time--;
                                if(this.time==0){
                                    clearInterval(timer);
                                    timer=null;
                                    this.regSucc=false;
                                    this.$router.push("/index");
                                }
                            },1000)                            
                        }
                    })
                }
            }
        }
    }
</script>

<style>
.register .header{
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
.register .arrow{
    width:5rem;
    height:5rem;
    float:left;
    background:url("../assets/img/arrow.png") no-repeat center center;
}
.register .content{
    margin-top:10rem;
}
.register form{
    margin:5rem auto;
    width:70%;
}
.register label{
    float:left;
    font-size:1.6rem;
    box-sizing:border-box;
}
.register span{
    display:block;
    text-align:left;
    padding:0 3rem 0 0;
    font-size:1.5rem;
    color:#FF714E;
    height:1.5rem;

}
.register  input{
    width:90%;
    height:4rem;
    border-radius:2%;
    font-size:2rem;
    margin-top:.2rem;
    outline:none;
    padding-left:3.5rem;
}
.register  input{
    outline:none;
}
.register input[type=button]{
    width:105%;
    height:5rem;
    background:#00B369;
    outline:none;
    border:none;
    font-size:2rem;
    color:#fff;
    margin-top:1rem;
    padding:0 !important;
}
.register .uname{
    background:url("../assets/img/user2.png") no-repeat left center;
}
.register .phone{
    background:url("../assets/img/phone.png") no-repeat left center;
}
.register .upwd{
    background:url("../assets/img/pwd.png") no-repeat left center;
}
.register .help_box{
    height:2rem;
}
.register .canUse{
    color:#009B69 !important;
}
.register .regSucc{
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    left:0;
    background:rgba(0,0,0,.4);
}
.register .rContent{
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
</style>