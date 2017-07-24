import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import remember from '@/components/Remember.vue'
import explore from '@/components/Explore.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/remember',
      name: 'remember',
      component: remember
    },
    {
      path: '/explore',
      name: 'explore',
      component: explore
    },

  ]
})
