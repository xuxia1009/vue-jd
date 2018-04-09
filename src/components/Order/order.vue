<template>
    <div class="shopCart">
        <shop-item
            v-for="(item,index) in list"
            :key="index"
            :item="item"
            :list="list"
        ></shop-item>
        <price-bar :list="list"></price-bar>
    </div>
</template>
<script>
    import shopItem from './ShopItem'
    import PriceBar from './PriceBar'
    export default {
        data(){
            return{
                list:null
            }
        },
        components:{
            shopItem,
            PriceBar
        },
        mounted(){
            this.$http('/api/shopCartList')
            .then((res)=>{  
                this.list=res.data[0].active_item
            })
        }
    }
</script>

<style scoped>
    .shopCart{
        width: 100%;
        height:100%;
    }
</style>
