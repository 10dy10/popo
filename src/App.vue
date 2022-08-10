<template>
  <TheLoading v-if="isLoading"/>
  <TheHeader />
  <router-view></router-view>
  <TheFooter />
</template>

<script>
import TheLoading from './components/TheLoading.vue'
import TheHeader from './layouts/TheHeader.vue'
import TheFooter from './layouts/TheFooter.vue'

export default {
  name: 'App',
  components: {
    TheLoading,
    TheHeader,
    TheFooter
  },
  data(){
    return {
      isLoading: true,
    }
  },
  mounted(){
    setTimeout(() => {
      this.isLoading = false;
    }, 4500);
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
