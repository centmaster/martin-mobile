<template>
  <div id="qrcode">
    <qrcode value="https://github.com/centmaster" type="img"></qrcode>
    <h2>欢迎来我的Github逛逛</h2></center>
  </div>
</template>

<script>
  import { Qrcode, Divider } from 'vux'

  export default {
    components:{
      Qrcode,
    },
    data () {
      return {

      }
    },
    methods:{

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #qrcode{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 16vh 0 0 0;
    width: 100vw;
  }
</style>
