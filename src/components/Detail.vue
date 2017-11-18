
<template> 
<div id="detail" v-if="detail">
    <div class="header"><i class="arrow" @click="goBack"></i>{{detail.pname}}</div>
    <div class="content">
        <img :src="require('../assets/img/'+detail.pic)">
        <div class="DefChose">
        <p class="pename">{{detail.pename}}</p>
        <p class="pname">{{detail.pname}}</p>
        <p class="pintro">{{detail.intro}}</p>
        <p class="dPrice">¥&nbsp;{{detail.price}}</p>
        <div class="choseSize">
            已选择：{{detail.size}}
            <i class="arrow_right"  @click="detailShow"></i>
        </div>
        </div>
        <div class="tocart" @click="toCartPage">
            <i class="icon_cart"></i>
            <div class="addOne" v-if="isAdd">+1</div>
        </div>
    </div>

    <div class="footer">
        <span></span>
        <span class="addCart" @click="addToCart">加入购物车</span>
        <span class="price">¥&nbsp;{{detail.price}}</span>
    </div>

    <div class="dShow" v-show="isDShow">
        <p class="dPrice">¥ &nbsp;{{price}}</p>
        <ul class="suit">
            <li  v-for="tmp in sizeObj">{{tmp}}</li>
        </ul>
        <p class="sizeT">商品规格</p>
        <ul class="size">
            <li v-for="(tmp,index) of sizeList" @click="changeSize(index)" :class="{isChecked:index==checkNum}">{{tmp.dsize}}</li>      
        </ul>
    </div>
</div>    
</template>



<script>
    export default{
        data:function(){
            return{
                pid:null,  
                detail:null,   
                sizeList:null,   
                sizeCur:null, 
                sizeObj:null,   
                checkNum:0, 
                price:0,
                isDShow:false,
                isAdd:false
            }
        },
        created:function(){
            this.pid=this.$route.params.pid;
            this.loadData();
        },
        methods:{
            loadData(){
                this.$http.get("data/detail.php?pid="+this.pid)
                .then((res)=>{
                    this.detail=res.data.detail;
                    this.sizeList=res.data.sizeList;
                    for(var n=0;n<this.sizeList.length;n++){
                        var arr = this.sizeList[n].detail.split("/");
                        this.sizeList[n].detail=[];
                        this.sizeList[n].detail.push(arr);
                    }
                    this.sizeCur=this.sizeList[0];
                    this.sizeObj=this.sizeCur['detail'][0];
                    this.price = this.sizeCur['price'];
                    this.pid=this.detail.pid;
                });
            },
            goBack(){
                this.$router.go(-1);
            },
            isDetailShow(){
                this.isDShow=true;
            },
            changeSize(index){
                this.checkNum=index;
                this.sizeCur=this.sizeList[index];
                this.sizeObj=this.sizeCur['detail'][0];
                this.price = this.sizeCur['price'];
            },
            addToCart(){
                if(this.isDShow==false){
                    this.isDShow=true;
                }else{
                    var uid=localStorage.getItem('uid');
                    if(uid){
                        this.$http.get('data/addToCart.php?pid='+this.pid+'&uid='+uid).then((res)=>{
                            console.log(res.data);
                            if(res.data.code==200){
                                this.isDShow=false;
                                this.isAdd=true;
                            }else if(res.data.code==201){
                                alert("网络错误，添加失败")
                            } 
                        })
                    }else{
                        this.$router.push('/login');
                    }   
                }
            },
            detailShow(){
                this.isDshow=true;
            },
            toCartPage(){
                this.$router.push('/cart');
            }
        }
    }
</script>

<style>
#detail{
    text-align:left;
    font-size:2rem;
    color:#030303;
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
    z-index:10;
}
#detail .header i{
    position:fixed;
    top:0;
    left:0;
}
#detail .arrow{
    width:5rem;
    height:5rem;
    float:left;
    background:url("../assets/img/arrow.png") no-repeat center center;
}
#detail .content{
    position:absolute;
    right:0;
    left:0;
    top:5rem;

}
#detail img{
    width:100%;
}
#detail .DefChose{
    padding:1rem 2rem;
}
#detail .pename{
    font-size:3rem;
}
#detail .pname{
    font-size:1.8rem;
}
#detail .tocart{
    width:5rem;
    height:5rem;
    position:fixed;
    left:1rem;
    bottom:6rem;
    display:inline-block;
    background:url("../assets/img/cart.png") no-repeat center center rgba(0,0,0,.5);
    border-radius:50%;
}
#detail .addOne{
    position:absolute;
    right:0;
    top:-.5rem;
    width:2rem;
    height:2rem;
    border-radius:50%;
    background:red;
    color:#fff;
    font-size:1.5rem;
    line-height:2rem;
    text-align:center;
}
#detail i{
    font-size:3rem;
}
#detail .choseSize{
    border-bottom:.1rem solid #ddd;
    border-top:.1rem solid #ddd;
    height:5rem;
    line-height:5rem;
    font-size:1.8rem;
    width:100%;
    margin-top:5rem;
}
#detail .arrow_right{
    width:5rem;
    height:5rem;
    display:inline-block;
    background:url("../assets/img/arrow_right.png") no-repeat center center;
    float:right;
}
#detail .pintro{
    font-size:1.6rem;
    line-height:2rem;
    padding:1.5rem 0;
    color:#9F9F9F;

}
#detail .footer{
    z-index:10;
    display:flex;
    position:fixed;
    right:0;
    left:0;
    bottom:0;
    height:5rem;
    box-shadow: 0 -0.026667rem 0.053333rem rgba(0,0,0,.1);
    line-height:5rem;
    background:#fff;
}
#detail .footer span{
    flex:1;
}
#detail .addCart{
    background:#000 !important;
    color:#fff;
    font-size:2rem;
    text-align:center;

}
#detail .price{
    font-size:2rem;
    padding-right:1rem;
    text-align:right;
}
#detail .dShow{
    position:fixed;
    right:0;
    left:0;
    bottom:5rem;
    box-shadow: 0 -0.026667rem 0.053333rem rgba(0,0,0,.1);
    z-index:10;
    background:#fff;
    padding:3rem;
}

#detail .dPrice{
    font-size:2rem;
    color:#FF714D;
    padding-bottom:1rem;
}
#detail .suit,.size{
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    padding-bottom:1rem;
}
#detail .suit li{
    width:40%; 
    padding:.5rem 0  0 3rem;
    height:2rem;
    font-size:1.3rem;
}
#detail .suit li:nth-child(1){
    background:url("../assets/img/size.png") no-repeat left center;
}
#detail .suit li:nth-child(2){
    background:url("../assets/img/person.png") no-repeat left center;
}
#detail .suit li:nth-child(3){
    background:url("../assets/img/saozi.png") no-repeat left center;
}
#detail .suit li:nth-child(4){
    background:url("../assets/img/time.png") no-repeat left center;
}
#detail .sizeT{
    font-size:1.3rem;
    padding-bottom:1rem;   
}
#detail .size li{
    width:23%;
    font-size:1.8rem;
    text-align:center;
    line-height:3.5rem;
    background:#F7F7F7;
    margin-bottom:.6rem;

}
#detail .isChecked{
    background:url("../assets/img/gou.png") no-repeat -.3rem -.3rem #fff !important ;
    border:.1rem solid #000;
}
</style>

