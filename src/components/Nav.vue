<template>
  <nav class="container">
    <div class="row">
      <div class="column">
        <a href="/">
          <h2 class="logo">Fakedata <sup>beta</sup></h2>
        </a>
      </div>

      <div class="column">
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>

          <li>
            <router-link to="/documentation">Documentation</router-link>
          </li>

          <li>
            <a href="https://github.com/NoEMEC/fakedata">Github</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.logo {
  sup {
    font-size: small;
  }
}

a {
  color: var(--gray-color);
}

ul {
  display: flex;
  li {
    list-style: none;
    margin-left: 3rem;
    font-size: x-large;
  }
}
</style>