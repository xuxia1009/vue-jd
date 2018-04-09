<template>
    <div class="home">
        <dl 
            v-for="(item,index) in list"
            :key="index"
            v-on:click="toDetail(item)"
        >
            <dt>
                <img :src="item.image_hash"/>
            </dt>
            <dd>
                {{item.name}}
            </dd>
        </dl>
    </div>
</template>
<script>
    import './Home.css'
    export default{
        data(){
            return{
                list:null
            }
        },
        mounted(){
            this.$http('/api/list')
            .then((res)=>{
                this.list=res.data[0].entries;
            })
        },
        methods:{
            toDetail(val){
                console.log(val)
                this.$router.push({ path: '/detail', params: { objData:val }})
            }
        }
    }
</script>