<template>
  <div>
    <Sidebar />
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup></script>

<style lang="scss">
main {
  padding: 30px 25px;
  margin-left: 22%;
  font-size: 2.1rem;

  @media only screen and (max-width: 992px) {
    margin-left: 28%;
  }

  @media only screen and (max-width: 576px) {
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
