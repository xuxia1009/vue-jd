<template>
    <div class="price">
        <p>总数 ： {{num}}</p>
        <p>总价 ： {{price}}</p>
    </div>  
</template>
<script>
    export default {
        props:['list'],
        data(){
            return{
                price:0,
                num:0
            }
        },
        created(){
            this.bus.$on('priceNotification',(obj)=>{
                this.price=obj.price;
                this.num=obj.num
            })
        },
        mounted(){
            let sumPrice=0;
            let sumNum=0;
            this.list !==null && this.list.forEach((item,index,array)=>{
                sumPrice+=item.quantity*item.price/100
                sumNum+=item.quantity
            })
            this.price=sumPrice.toFixed(2)
            this.num=sumNum
        }
    }
</script>
