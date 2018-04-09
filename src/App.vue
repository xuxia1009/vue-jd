<template>
  <div id="app">
    <header class="header">header</header>
    <section class="section">
        <router-view/>
    </section>
    <footer-cell class="footer">
        <router-link 
            v-for='(item,index) in list'
            :key="index"
            :to='item.url'
        >{{item.name}}</router-link>
    </footer-cell>
  </div>
</template>

<script>
import FooterCell from '@/components/Footer'
import '../static/css/style.css'
export default {
  name: 'App',
  data(){
    return{
      list:null
    }
  },
  components:{
      FooterCell
  },
  mounted(){
    this.$http('/api/routerList')
    .then((res)=>{
      console.log(res.data);
      this.list=res.data
    })
  }
}
</script>

<style>

</style>
