<template>
  <div class="browser">
    <div class="browser__buttons">
      <div class="btn btn--red"></div>
      <div class="btn btn--yellow"></div>
      <div class="btn btn--green"></div>
    </div>

    <div class="browser__url">
      <p>https://api.fakedata.co<strong>/users</strong></p>

      <div class="url__type">
        GET
      </div>
    </div>

    <div class="browser__response"></div>
  </div>
</template>

<style lang="scss" scoped>
.browser {
  background: #ffffff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 400px;
  height: 250px;
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
      right: 0.5rem;
      top: 50%;
      transform: translate(0, -50%);
    }
    p {
      margin: 0;
    }
  }
}
</style>