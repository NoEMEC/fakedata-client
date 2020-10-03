<template>
  <div class="home">
    <header-component class="header" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HeaderComponent from '@/components/Header.vue';
@Options({
  components: {
    HeaderComponent
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss">
.header {
  height: calc(100vh - 70px);
}
</style>
