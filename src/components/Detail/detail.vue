<template>
    <div>
        detail
        
    </div>
</template>
<script>
    export default{
        data(){
            return{
                meg:''
            }
        },
        mounted(){
            let routerParams=this.$route.params;
            this.meg=routerParams;
            console.log(this.$route.params);
        }
    }
</script>
