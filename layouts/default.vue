<template>
  <Sidebar />
  <div class="main">
    <slot />
  </div>
</template>

<script setup></script>

<style lang="scss">
.main {
  padding: 30px 25px;
  box-sizing: border-box;
  width: calc(100% - 13rem);
  margin-left: 13rem;

  @media only screen and (max-width: 768px) {
    padding: 30px 25px;
    box-sizing: border-box;
    width: 100%;
    margin-left: 0;
  }
}

body {
  background-color: var(--secondaryColor);
  color: var(--primaryColor);
}

a {
  text-decoration: none;
  color: var(--primaryColor);
}
</style>
