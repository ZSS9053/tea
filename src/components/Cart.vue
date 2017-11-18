<template>
  <div class="cart">
    <div class="header"><i class="arrow" @click="goBack"></i>购物车</div>
    <div class="content">
        <ul class="itemList" v-if="itemList.length>0">
            <li class="item_box" v-for="(tmp,i) in itemList">
                <div class="item">
                    <div class="itemPic">
                       <img :src="require('../assets/img/'+tmp['pic'])">
                    </div>
                    <div class="detail">
                        <p class="pEname">{{tmp.pename}}</p>
                        <p class="pName">{{tmp.pname}}</p>
                        <p class="pSize">规格 ：&nbsp;{{tmp['dsize']}}</p>
                        <div class="choseNum">
                            <p class="sPrice"><span class="pPrice">¥&nbsp;{{tmp['price']}}</span></p>
                            <p class="handle">                           
                                <span class="dish_box" v-show="tmp.count<=1" @click="minus(i)">
                                    <img src="../assets/img/dishes.png">
                                </span>
                                <span class="mins" v-show="tmp.count>1" @click="minus(i)">
                                    <img src="../assets/img/mins.png">
                                </span>
                                <span>{{tmp.count}}</span>
                                <span class="add" @click="addCount(i)">
                                    <img src="../assets/img/add.png">
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <div class="noItem"v-if="itemList.length==0">
            <img src="../assets/img/cart.jpg">
            <p >购物车是空的,&nbsp;&nbsp;<router-link to="/" class="toMain">点击</router-link>&nbsp;回首页</p>
        </div>
    </div>
    <div class="footer" v-if="itemList.length>0">
        <div class="toBuy">
            <div class="pay" >下单</div>
            <span class="toPrice">¥&nbsp;{{totalPrice}}</span>  
            
        </div>
    </div>
  </div>
</template>

<script>

export default {
    data:function(){
        return {
            totalPrice:0,
            canMinus:true,
            itemList:[],
        }
    },
    created:function(){
        this.loadData();
    },
    methods:{
        minus:function(i){
            this.itemList[i].count--;
            var count=this.itemList[i].count;
            var pid = this.itemList[i].product_id;
            this.$http.get("data/update_count.php?pid="+pid+"&count="+count);
            if(count==0){
                this.loadData();
            }
        },
        addCount(i){
            this.itemList[i].count++;
            var count=this.itemList[i].count;
            var pid = this.itemList[i].product_id;
            this.$http.get("data/update_count.php?pid="+pid+"&count="+count).then((res)=>{
            });
        },
        loadData(){
            var uid = localStorage.getItem('uid');
            console.log(uid);
            if(!uid){return;}
            this.$http.get("data/cart.php?uid="+uid)
            .then((res)=>{
                this.itemList=res.data;
                console.log(this.itemList);
            })
        },
        goBack(){
            this.$router.go(-1);
        }
    }
}
</script>

<style>
.cart .header{
    position:fixed;
    right:0;
    left:0;
    top:0;
    height:5rem;
    line-height:5rem;
    font-size:1.8rem;
    background:#fff;
    text-align:center;
}
.cart .header i{
    position:fixed;
    top:0;
    left:0;
}
.cart .arrow{
    width:5rem;
    height:5rem;
    float:left;
    background:url("../assets/img/arrow.png") no-repeat center center;
}
.cart .content{
    font-size:1.4rem;
    color:#9A9A9A;
    background:#fff;
    position:fixed;
    right:0;
    left:0;
    top:5rem;
    overflow:visible;
}
.cart .itemList{
    height:auto;
}
.cart .pEname,.pName{
    color:#000 !important;
}
.cart .dishWare img{
    vertical-align:middle;
}
.cart .handle{
    float:right;
}
.cart .handle span{
    display:inline-block;
    width:3rem;
    height:3rem;
    line-height:3rem;
    background:#F0F0F0;
    text-align:center;
}
.cart .handle img{
    width:45%;
    vertical-align:middle;
}
.cart .sPrice{
    float:left;
}
.cart .detail>p{
    font-size:1.6rem;
}
.cart .choseNum{
    line-height:3rem;
    margin-top:1rem;
}
.cart .footer{
    position:fixed;
    right:0;
    left:0;
    bottom:0;
    height:5rem;
    background:#fff;
    line-height:5rem;
    text-align:right;
    font-size:1.6rem;
}
.cart .toBuy{
    position:absolute;
    right:0;
    top:0;
    width:60%;
    box-sizing:border-box;
}
.cart .pay{
    display:inline-block;
    width:55%;
    height:100%;
    background:#000;
    font-size:2rem;
    color:#fff;
    text-align:center;
}
.cart .toPrice{
    display:inline-block;
    width:35%;
    height:100%;
    padding-right:1rem;
    font-size:1.8rem;
}
.cart .item{
    width:100%;
    padding:1rem 2rem 1rem 2rem;
    text-align:left;
    background:#fff;
    box-sizing:border-box;
}
.cart .item:after{
    content:"";
    display:block;
    clear:both;
}
.cart .item_box{
    box-shadow:0rem .1rem .5rem rgba(0,0,0,.5);
    box-sizing:border-box;
}
.cart .itemPic{
    width:40%;
    float:left;
    overflow:hidden;
}
.cart .itemPic img{
    width:100%;
}
.cart div.detail{
    padding-left:1.8rem;
    float:left;
    width:50%;
}
.cart p.dishWare{
    float:left;
    padding-right:2rem;
    width:100%;
}
.cart .noItem{
    font-size:1.8rem;
}
.cart .toMain{
    text-decoration:underline;
    color:#DE5246;
}
</style>