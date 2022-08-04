<template>
  <TheHeader />
  <div class="wrap">
    <TheMain />
  </div>
</template>

<script>
import TheHeader from './layouts/TheHeader.vue'
import TheMain from './components/TheMain.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheMain,
  },
  data(){
    return {

    }
  }
}
</script>

<style lang="scss">
  #app {
    color: $text;
    background-color: $white;
  }
</style>
