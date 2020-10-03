<template>
  <div class="row">
    <div class="column">
      <h2>
        Free data fake using REST API <br />
        or GraphQL, for testing <br />
        and prototyping.
      </h2>

      <div class="copyright">
        <img src="/img/svg-icons/code.svg" alt="Code icon" />
        <span>With</span>
        <img src="/img/svg-icons/heart.svg" alt="Heart icon" />
        <span>by</span>
        <a href="https://noemec.net">NoEMEC</a>
      </div>
    </div>

    <div class="column">
      <browser-component />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import BrowserComponent from '@/components/Browser.vue';
@Options({
  components: {
    BrowserComponent
  }
})
export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
.row {
  align-items: center;
}
h2 {
  color: var(--gray-color);
}
.copyright {
  display: flex;
  align-items: center;
  * {
    margin-right: 0.2rem;
  }
}
</style>
