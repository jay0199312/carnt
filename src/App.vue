<template>
  <div id="app">
    <cntHeader></cntHeader>
    <router-view></router-view>
  </div>
</template>

<script type="text/babel">
import cntHeader from './components/cnt_header.vue'
export default {
  name: 'app',
  components:{cntHeader}
}
</script>

<style>

</style>
