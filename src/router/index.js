import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Todo from 'components/Todo'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Todo',
      component: Todo
    }
  ]
})
