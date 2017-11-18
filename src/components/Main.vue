<template>
<div id="main">
    <!-- 头部-->
    <div id="header">  
     <img src=".././assets/img/dg.png" class="logo" />
    </div>

    <div class="main_content">
    <!-- 轮播图-->
      <v-swiper :banner="banner"></v-swiper>
    <!-- 轮播图下列表-->
      <div class="classify" v-if="index">
          <div id="indexitems" style="flex:1" v-for="(tmp,i) of index" @click="toClassify(i)" :key="i">
          <img :src="require('../assets/img/'+tmp.pic)"><br>
          {{tmp.title}}
          </div>
      </div>
      <p class="topTitle">榜单</p>
      <div class="top">
        <div class="topItem" v-for="(tmp,i) in top " :key="i" >
          <img :src="require('../assets/img/'+tmp.pic)" >
        </div>
      </div>
    </div>
</div>
</template>
<script>
import swiper from './swiper'
export default {
  data:function(){
    return {
      banner:[],
      index:[],
      top:[]
    }
  },
  created:function(){
    this.loadData();
  },
  methods:{
    loadData:function(){
      this.$http.get("data/main.php")
      .then((res)=>{
          this.banner=res.data['banner'];
          this.index=res.data['index'];
          this.top=res.data['top'];          
      })
    },
    toClassify(i){
      this.$router.push('/classify/'+(i+1));
    }
  },
  components: {
   vSwiper:swiper,
   vTop:top
  }   
}
</script>

<style>
.logo{
  width:20%;
}
#header{
  position:fixed;
  top:0;
  right:0;
  left:0;
  box-shadow: 0  0.013333rem  0.026667rem rgba(0,0,0,.1);
  background:#fff;
  z-index:10;
}
#main{
  font-size:1.6rem;
  border:.1rem solid #fff;
}
#main  .topTitle{
  font-size:1.8rem;
  line-height:5rem;
}
#main .classify{
    display:flex;
    flex-wrap:nowrap;
    width:100%;
}
#main .top{
   display:flex;flex-wrap:wrap;
   justify-content:space-between;
   padding:0 1rem;
}
#main .topItem{
  border-radius:1.5rem;
  width:49%;
}
#main .topItem img{
  width:100%;
}

</style>