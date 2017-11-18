<template>
  <div id="mine">
    <div class="img_bg">
       <img  src="../assets/img/mine.jpg" />
       <div class="regALog">
         <div class="avatar" v-if="isLogin">
          <img  src="../assets/img/avatar.jpg" />
        </div>
        <div class="avatar" v-if="!isLogin">
          <img  src="../assets/img/avatar1.png" />
        </div>
          <div class="toLR" v-if="isLogin" @click="regOut">退出登录</div>
          <div class="toLR" v-if="!isLogin">
            <span @click="toPage('login')">登录</span>
            <span>/</span>
            <span @click="toPage('register')">注册</span>
          </div>
       </div>
    </div>
    <div class="money">
      <span>0张</br>优惠券</span><span>¥0.00</br>余额</span>
    </div>
    <div class="detail">
      <div class="myOrder"><i class="orderImg"></i><span>我的订单</span></div>
      <div class="myLoation"><i class="locationImg"></i><span>地址管理</span></div>
      <div class="myCard"><i class="cheaperImg"></i><span>优惠券</span></div>
      <div class="mymoney"><i class="yueImg"></i><span>余额充值</span></div>
    </div>
    <div class="other">
      <div>用户反馈</div>
      <div>用户协议</div>
      <div>版本</div>
    </div>
  </div>
</template>

<script>

export default {
      data:function(){
        return {
          isLogin:false
        }
      },
      methods:{
        toPage:function(route){
          this.$router.push('/'+route);
        },
        regOut(){
          localStorage.removeItem('uid'); 
          this.isLogin=false;
        }
      },
      created:function(){
       var uid =  localStorage.getItem('uid');
        if(uid){
          this.isLogin=true;
        }else{
          this.isLogin=false;
        }
      }
}
</script>

<style>
#mine{
  position:absolute;
  top:0;
  right:0;
  left:0;
  font-size:1.6rem;
  background:#F0F0F0;
  padding-bottom:5rem;
  height:auto;
}
#mine .img_bg{
  width:100%;
  height:20rem;
  overflow:hidden;
  position:relative;
}
#mine .img_bg>img{
  width:100%;
}
#mine .regALog{
  position:absolute;
  top:35%;
  right:10%;
  width:80%;
  height:6rem;
  background:#fff;
}
#mine .avatar{
  position:absolute;
  top:-1rem;
  left:1rem;
  width:20%;
  height:100%;
  border-radius:50%;
  overflow:hidden;
  border:.5rem solid #fff;
}
#mine .avatar img{
  width:110%;
  margin-top:-5%;
  margin-left:-5%;
}
#mine .toLR{
  font-size:1.8rem;
  line-height:6rem;
  height:100%;
  width:100%;
}
#mine .money{
  display:flex;
  height:5rem;
  box-shadow:0 .1rem .2rem rgba(0,0,0,.5);
  background:#fff;
  margin-bottom:1.5rem;
  padding-top:1.5rem;
}
#mine .money span{
  display:inline-block;
  height:100%;
  flex:1;
}
#mine .detail div{
  width:100%;
  height:5rem;
  background:#fff;
}
#mine .detail div i{
  display:inline-block;
  width:15%;
  height:5rem;
  float:left;
}
#mine .detail div span{
  display:inline-block;
  height:100%;
  width:80%;
  text-align:left;
  line-height:5rem;
  border-bottom:.1rem solid #ddd;
  font-size:1.8rem;
}
#mine .detail div.mymoney{
  border-bottom:.1rem solid #ddd;
  margin-bottom:1.5rem;
}

#mine .detail i.orderImg{
  background:url('../assets/img/order.png') no-repeat 65% center;
}
#mine .detail i.yueImg{
  background:url('../assets/img/yue.png') no-repeat 65% center;
}
#mine .detail i.cheaperImg{
  background:url('../assets/img/cheaper.png') no-repeat 65% center;
}
#mine .detail i.locationImg{
  background:url('../assets/img/location.png') no-repeat 65% center;
}
#mine .other div{
  background:#fff;
  height:5rem;
  line-height:5rem;
  text-align:left;
  width:95%;
  padding-left:2rem;
  bottom:.1rem solid #ddd;
  border-bottom:.1rem solid #ddd;
}
.mine .other{
  background:#fff;
}
</style>
