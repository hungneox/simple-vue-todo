<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <table>
      <tr>
        <td>
          <Todo/>
        </td>
        <td>
          <Done/>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import Todo from 'components/Todo'
import Done from 'components/Done'
export default {
  name: 'app',
  components: { Todo, Done }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
