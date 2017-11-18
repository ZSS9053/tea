<template>
    <div class="goodlist" >
        <div class="items" v-for="(tmp,index) in goodlist" :key="index" @click="toDetail(tmp.pid)">
            <img :src="require('../assets/img/'+tmp.pic)">
            <h3>{{tmp.pename}}</h3>
            <h3>{{tmp.pname}}</h3>
            <p>¥{{tmp.price}}/{{tmp.size}}<i class="icon_cart"></i></p>
        </div>              
    </div>
</template>

<script>
export default{
    props:['search_kw'],
    data:function(){
        return {
            goodlist:null
        }
    },
    created:function(){
        this.loadData()
    },
    watch:{
        search_kw:function(){
            this.loadData();
        }
    },
    methods:{
        //请求数据列表
        loadData(){
            this.$http.get("data/list.php?kw="+this.search_kw)
                .then((res)=>{
                    this. goodlist=res.data.data;
                })
        },
        toDetail(pid){
            this.$router.push('/detail/'+pid);
        }
    }
}
   

</script>

<style>
.goodlist{
    margin-top:9.5rem;
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
    padding:0 1rem;
}
.goodlist .items{
    width:46%;
    padding:1rem 0;
}
.goodlist .items img{
    width:100%;
}
.goodlist.icon_cart{
    width:1.5rem;
    height:1.5rem;
    display:inline-block;
    position:relative;
    right:-1rem;
    bottom:-.5rem;
    background:url("../assets/img/cart_b.png") no-repeat center center;
    z-index:1;
}
</style>

