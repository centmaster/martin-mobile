<template>
  <div class="hello">
    <x-header :left-options="{showBack: false}">
      <span>Martin && Stephen</span>
    </x-header>
  </div>
</template>

<script>
  import { XHeader } from 'vux'

  export default {
    components:{
      XHeader
    },
    data () {
      return {

      }
    },
    methods:{
        leftShow(){
            this.$store.commit('leftchange');
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
