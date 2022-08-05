<template>
  <TheLoading v-if="isLoading"/>
  <TheHeader />
  <div class="wrap">
    <TheMain />
  </div>
</template>

<script>
import TheLoading from './components/TheLoading.vue'
import TheHeader from './layouts/TheHeader.vue'
import TheMain from './components/TheMain.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheMain,
    TheLoading
  },
  data(){
    return {
      isLoading: true,
    }
  },
  methods: {
    // async fetchData(){
    //   this.isLoading = true;
    //   const { data } = await fetchPost();
    //   this.isLoading = false;
    //   console.log(data.posts);
    //   this.postItems = data.posts;
    // }
  },
  created(){
    // this.fetchData();
  }
}
</script>

<style lang="scss">
  #app {
    width: 100%;
    color: $text;
    background-color: $white;
  }
</style>
