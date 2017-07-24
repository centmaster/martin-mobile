<template>
  <div>
    <tabbar>
      <tabbar-item  link="/">
          <span slot="label">We2</span>
      </tabbar-item>
      <tabbar-item  link="/remember">
        <span slot="label">Remember</span>
      </tabbar-item>
      <tabbar-item  link="/explore">
        <span slot="label">Explore</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem, Group, Cell } from 'vux'
  export default {
    components: {
      Tabbar,
      TabbarItem,
      Group,
      Cell
    },
    methods:{


    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
