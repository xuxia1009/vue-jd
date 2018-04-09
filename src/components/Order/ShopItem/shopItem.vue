<template>
    <dl>
            <dt>
                <img :src="item.images.cart"/>
            </dt>
            <dd>
                <h5>
                    {{item.name}}
                </h5>
                <p>{{item.price/100}}</p>
                <p>
                    <button type="button" v-on:click="sub">-</button>
                    <span>{{item.quantity}}</span>
                    <button type="button" v-on:click="add">+</button>
                </p>
            </dd>
    </dl>
</template>
<script>
    export default {
        props:['item','list'],
        methods:{
            add(){
                this.item.quantity++;
                this.computeSumPrice()
            },
            sub(){
                this.item.quantity--;
                this.computeSumPrice()
            },
            computeSumPrice(){
                let sumPrice=0;
                let sumNum=0;
                this.list.forEach((item,index,array)=>{
                    sumPrice+=item.quantity*item.price/100
                    sumNum+=item.quantity
                })
                sumPrice=sumPrice.toFixed(2)*1
                this.bus.$emit('priceNotification',{price:sumPrice,num:sumNum})
            }
        }
    }
</script>
<style scoped>
    dl{
        width: 100%;
        height:170px;
        display: flex;
        justify-content: space-between;
        align-items: center
    }
    dl dt{
        flex:4;
    }
    dl dt img{
        width:110px;
        height:110px;
    }
    dl dd{
        flex:6;
    }
    dl dd button{
        width: 30px;
        height: 30px;
    }
</style>
