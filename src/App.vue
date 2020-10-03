<template>
  <div class="container">
    <nav-component />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import NavComponent from '@/components/Nav.vue';
@Options({
  components: {
    NavComponent
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss">
* {
  font-family: 'Ropa Sans', sans-serif;
}

body {
  margin: 0;
  padding: 0;
  background-image: url('/img/blob.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right center;
}

:root {
  --gray-color: #4f4f4f;
}
</style>
