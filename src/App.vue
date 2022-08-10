<template>
  <TheLoading v-if="isLoading"/>
  <router-view></router-view>
</template>

<script>
import TheLoading from './components/TheLoading.vue'

export default {
  name: 'App',
  components: {
    TheLoading,
  },
  data(){
    return {
      isLoading: false,
    }
  },
  mounted(){
    // setTimeout(() => {
    //   this.isLoading = false;
    // }, 4500);
  },
  
}
</script>

<style lang="scss">
  #app {
    width: 100%;
    color: $text;
    background-color: $white;
  }
</style>
