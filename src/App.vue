<template>
  <div id="app">
    <header-nav></header-nav>
    <router-view></router-view>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
  import HeaderNav from './components/Header.vue'
  import FooterBar from './components/Footer.vue'
  import { mapState, mapMutations} from 'vuex'

export default {
  name: 'app',
  components:{
    HeaderNav,
    FooterBar,
  },
  mounted(){

  },

}
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';  //使用reset样式覆盖浏览器本来的样式
body {
  background-color: #fbf9fe;
  width: 100vw;
  height: 100vh;
}
</style>
