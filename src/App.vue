<template>
  <div id="app">
    <header-nav/>
    <router-view/>
  </div>
</template>

<script>
import headerNav from './components/header'
export default {
  name: 'App',
  components: {
    headerNav
  }
}
</script>

<style>
</style>
