<template>
<div class="discuss">
    <div class="header">社区</div>
    <ul class="itemlist">
      <li v-for="(tmp,i) of list ">
          <div class="time">{{tmp['ttime']}}</div>
          <div class="item">
            <p class="title">
                {{tmp.title}}
            </p>
            <p class="time">{{tmp['ttime']}}</p>
            <div class="artImg">
              <img :src="require('../assets/img/'+tmp['pic'])"/>
            </div>
            <div class="place">会员精选</div>
            <div class="lookmore" @click="lookMore(i)">
              阅读全文<span>
              <img src="../assets/img/arrow_right.png"></span>
            </div>
          </div>
      </li>
    </ul>
</div>
</template>

<script>

export default {
  data:function(){
    return{
      list:[]
    }
  },
  created:function(){
    this.loadData();
  },
  methods:{
    loadData(){
      this.$http.get('data/discuss.php').then((res)=>{
          this.list=res.data;
      })
    },
    lookMore(i){
      this.$router.push("/artical/"+i);
      console.log(1);
    }
  }

}
</script>

<style>
.discuss{
  margin-top:5rem;
  font-size:1.6rem;
  border:.1rem solid #fff;
  background:#EDECEE;
}
 .header{
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
discuss .arrow{
    width:5rem;
    height:5rem;
    float:left;
    background:url("../assets/img/arrow.png") no-repeat center center;
}
.discuss div.time{
  display:inline-block;
  padding:.3rem 1.2rem;
  border-radius:.5rem;
  background:#CECECE;
  margin:1rem auto;
  color:#fff;
}
.discuss div.item{
  width:92%;
  background:#fff;
  margin:0 auto;
  border:.1rem solid #DDDDDD;
  padding:1rem 1rem;
  text-align:left;
  border-radius:1rem;
}
.discuss div.item .title{
  font-size:2.5rem;
}
.discuss div.item .time{
  padding-bottom:1.5rem;
}
.discuss div.item .artImg img{
  width:100%;
}
.discuss  .lookmore{
  font-size:1.8rem;
  height:5rem;
  border-top:.1rem solid #ddd;
  line-height:5rem;
}
.discuss .lookmore img{
  float:right;
  margin-top:.6rem;
}
.discuss  .place{
  color:#a0a0a0;
  padding:.5rem 0.1rem;
}
</style>