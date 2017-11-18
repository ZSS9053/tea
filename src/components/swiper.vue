<template>
<div class="banner">
  <swiper :options="swiperOption" ref="mySwiper" class="swiper-box">
    <swiper-slide class="swiper-item" v-for="(tmp,index) of banner" :key="index">
        <img :src="require('../assets/img/'+tmp.pic)">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>
  
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    props:['banner'],
    data() {
      return {
        swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
        loop: true
        }
      }
    },
    components: {
    swiper,
    swiperSlide
    }
  }
</script>

<style>
.banner{
    padding-top:5rem;
}
.banner  .swiper-box {
    width: 100%;
    height: 20rem;
    margin: 0 auto;
  }
.banner  .swiper-item {
    height: 100%;
    text-align: center;
    font-size: 18px ;
    background: #fff;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
.banner  .swiper-item img{
      width:100%;
  }
</style>