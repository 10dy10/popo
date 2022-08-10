<template>
  <nav>
    <a href="#">PROFILE</a>
    <a href="/"><h1>DAYOUNG</h1></a>
    <a href="#">PORTFOLIO</a>
  </nav>
</template>

<script>
export default {
  name: 'TheHeader',
}
</script>

<style lang="scss" scoped>
  nav {
    position: fixed;
    display: flex;
    justify-content: center;
    gap: 2rem;
    width: 100%;
    height: 8rem;
    padding: 3rem 0;
  }
</style>