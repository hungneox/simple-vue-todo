<template>
  <ul>
    <li v-for="item in undoneItems(items)">
        <a v-on:click="markAsDone(item)" href="#">{{ item.title }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Todo',
  data () {
    return {
      items: [
        {id: 1, title: 'Brocolli', is_done: false},
        {id: 2, title: 'Spinach', is_done: false},
        {id: 3, title: 'Cauliflower', is_done: false},
        {id: 4, title: 'Strawberry', is_done: false},
        {id: 5, title: 'Mushroom', is_done: false}
      ]
    }
  },
  methods: {
    undoneItems: function (items) {
      return items.filter(function (item) {
        return item.is_done === false
      })
    },
    markAsDone: function (item) {
      item.is_done = true
    }
  }
}
</script>

<style scoped>
</style>
