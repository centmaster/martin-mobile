<template>
  <div class="dialog"
       v-show="leftshow"
       transition="dialog-fade"
  :overlayOpacity="0.8">
    <div class="dialog-content">
      <slot></slot>
    </div>
  </div>
</template>

<style>
  .dialog {
    left: 0;
    top: 0;
    position: fixed;
    width: 50%;
    height: 100%;
  }

  .dialog-content {
    background: black;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
  }

  .dialog-fade-transition {
    transition: opacity .3s linear;
  }

  .dialog-fade-enter,
  .dialog-fade-leave {
    opacity: 0;
  }
</style>

<script>
  import 'vue-popup-mixin/dist/VuePopupMixin.css';
  import Popup from 'vue-popup-mixin'
  import { mapState, mapMutations} from 'vuex'
  export default {
    mixins: [Popup],
    methods: {
      // 响应 overlay事件
      overlayClick () {
          alert('test')
        this.$store.commit('leftchange');
      },
      // 响应 esc 按键事件
      escPress () {
        this.$store.commit('leftchange');
      }
    },
    computed:{
      ...mapState({
        leftshow:state=>state.leftshow
      })
    }
  }
</script>
