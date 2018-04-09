<template>
    <div class="scroll">
        <div class="left">
            <router-link to="#a">aaa</router-link>
            <router-link to="#b">bbb</router-link>
            <router-link to="#c">ccc</router-link>
        </div>
        <div class="right">
            <div id="a" class="view">aaaaaaaaa</div>
            <div id="b" class="view">bbbbbbbbb</div>
            <div id="c" class="view">vcccccccc</div>
        </div>
    </div>
</template>
<script>
    export default{

    }
</script>
<style scoped>
    .scroll{
        width: 100%;
        height: 100%;
        display: flex;
    }
    .left{
        flex:3
    }
    .left a{
        display: block;
        width:100%;
        height:50px;
        text-align: center;
        line-height: 50px;
        border-bottom:1px solid #ccc;
    }
    .right{
        flex:7
    }
    .view{
        width:100%;
        height: 100%;
        background:brown;
    }
    #a{
        background: cadetblue;
    }
    #b{
        background:chartreuse;
    }
</style>
