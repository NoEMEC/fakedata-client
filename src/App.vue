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
