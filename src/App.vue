<template>
  <NavComponent />
  <router-view />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import NavComponent from "@/components/Nav.vue";
@Options({
  components: {
    NavComponent
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss">
* {
  font-family: "Ropa Sans", sans-serif;
}

:root {
  --gray-color: #4f4f4f;
}
</style>