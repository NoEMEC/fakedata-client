<template>
  <div class="row">
    <div class="column">
      <h2>
        Free data fake using REST API <br />
        or GraphQL, for testing <br />
        and prototyping.
      </h2>
    </div>

    <div class="column">
      <browser-component />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import BrowserComponent from "@/components/Browser.vue";
@Options({
  components: {
    BrowserComponent
  }
})
export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
</style>