<template>
  <div class="home">
    <img alt="oscharko logo" src="../assets/logo.svg" width="300">
    <HelloWorld msg="Welcome to oscharko!"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
};
</script>
