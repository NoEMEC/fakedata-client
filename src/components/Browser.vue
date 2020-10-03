<template>
  <div class="browser">
    <div class="browser__buttons">
      <div class="btn btn--red"></div>
      <div class="btn btn--yellow"></div>
      <div class="btn btn--green"></div>
    </div>

    <div class="browser__url">
      <p>https://api.fakedata.co<strong>/users</strong></p>

      <div class="url__type">GET</div>
    </div>

    <div class="browser__response">
      <pre>
        <code class="language-json">
          {
            "data": [
              {
                "id": "5bf142459b72e12b2b1b2cd",
                "name": "Fake data",
                "email": "support@fakedata.co"
              }
            ]
          }
        </code>
      </pre>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
declare let hljs: any;

@Options({
  mounted() {
    hljs.initHighlightingOnLoad();
    document.querySelectorAll('pre code').forEach(block => {
      hljs.highlightBlock(block);
    });
  }
})
export default class BrowserComponent extends Vue {}
</script>

<style lang="scss" scoped>
.browser {
  background: #ffffff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 100%;
  height: auto;
  padding: 1rem;
  .browser__buttons {
    display: flex;
    .btn {
      width: 10px;
      height: 10px;
      border-radius: 25px;
      margin-left: 0.5rem;
      &.btn--red {
        background: #ff615a;
      }
      &.btn--yellow {
        background: #ffbd2f;
      }
      &.btn--green {
        background: #2cc942;
      }
    }
  }
  .browser__url {
    padding: 0.5rem 1rem;
    margin-top: 2rem;
    background: #bdbdbd;
    border-radius: 5px;
    position: relative;
    .url__type {
      position: absolute;
      right: 0.7rem;
      top: 50%;
      transform: translate(0, -50%);
      font-weight: bold;
    }
    p {
      margin: 0;
      strong {
        color: #000000;
      }
    }
  }
  .browser__response {
    pre {
      border: none;
      background: transparent;
      margin: 0;
    }
  }
}
</style>
