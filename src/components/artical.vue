<template>
<div class="artical">
    <div class="header"><i class="arrow" @click="goBack"></i>芒果</div>
    <div> <img src="../assets/img/mangguo.jpg"></div>
   <p> 。挺佩服我的一个朋友的，忙的时候一门心思忙着自己的本行，闲下来的时候，想着却是如何去做另一个行业，尽管她也是真心的不懂那个陌生的行业能给她带来什么。我心里对自己不熟悉的东西，总是会持一种保守的态度。她就那么一句：“你不试怎么知道！”现在，她已经有了几个店，却做着相互完全不搭的行业。成功之后的她，还会为自己第一次跨界的失败而感到失落吗？</p>
   <div> <img src="../assets/img/magguo2.jpg"></div>

    <p>回想起来自己二十刚出头的时候，提着一大箱的样品出远门去跑业务的样子，在一个客户的店门口转过来又转过去，就是不敢进门。最后还是这家店的老板将我喊进门的。我已经记不清我进门之后跟这位老板聊了什么、如何第一次介绍自己的产品的了，但是我永远记住了这位老板的一句话：“小伙子，别怕，你还没有去尝试，怎么知道自己不行呢？”挺谢谢这位老板的，第一次就让我学会了受用一生的做事道理。</p>
    <div> <img src="../assets/img/magguo3.jpg"></div>
    <p>记得几年前，儿子刚学会骑自行车的时候，我就是用这一句话去鼓励他的。虽然他也有过摔跤的时候，但最终儿子还是顺利地学会了骑车。清晰记得他骑着小车跟我打招呼的时候，脸上洋溢着无比自豪感的样子。他可能已经忘记了曾经无数次跌倒所带来的伤痛，不知道他是否还能记得第一次上车的紧张与第一次跌倒时的伤痛。</p>
    <div> <img src="../assets/img/brave.jpg"></div>
    <p>“成功不是最终的，失败不是致命的，开始的勇气才是最重要！”</p>


</div>
</template>

<script>

export default {
    methods:{
        goBack(){
            this.$router.go(-1);
        }
    }

}
</script>

<style>
.artical{
  margin-top:5rem;
  font-size:1.6rem;
  border:.1rem solid #fff;
  font-size:1.7rem;
  padding:0 .5rem;
}
 .artical .header{
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
 .artical  .arrow{
    width:5rem;
    height:5rem;
    float:left;
    background:url("../assets/img/arrow.png") no-repeat center center;
}
 .artical  p{
    text-indent:3.4rem;
}
 .artical  img{
    width:100%;
}
</style>