<template>
  <div class="sidebar">
    <NuxtLink to="/" id="logo">G L I D E R</NuxtLink>
    <div>
      <NuxtLink to="/" id="item1"><Icon name="fa-solid:home" /> Home</NuxtLink>
      <NuxtLink to="#" id="item2"
        ><Icon name="fa-solid:envelope" /> Messages</NuxtLink
      >
      <NuxtLink to="#" id="item3"
        ><Icon name="fa-solid:bell" /> Notifications</NuxtLink
      >
      <NuxtLink to="#" id="item4"
        ><Icon name="fa-solid:plus" /> Create</NuxtLink
      >
      <NuxtLink to="/settings" id="item5"
        ><Icon name="fa:cog" /> Settings</NuxtLink
      >
      <NuxtLink to="#" id="item6"
        ><Icon name="fa-solid:user" /> Profile</NuxtLink
      >
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.sidebar {
  margin: 25px 0;
  padding: 0 30px;
  height: calc(100% - (2 * 25px));
  font-size: 1.1rem;
  width: 13rem;
  position: fixed;
  left: 0;
  top: 0;
  border-right: 2px solid var(--borderColor);
  padding: 20px;
  box-sizing: border-box;
  display: inline-flex;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    display: none;
  }

  #logo {
    color: var(--accentColor);
  }

  a {
    padding: 0.5em 1em;
    margin-bottom: 1em;
  }

  div {
    #item1.router-link-exact-active,
    #item5.router-link-exact-active {
      background-color: var(--hoverColor);
      font-weight: 700;
    }

    a {
      display: block;
      transition: 100ms;
      padding: 0.5em 1em;
      box-sizing: border-box;
      border-radius: 9999px;

      @media only screen and (prefers-reduced-motion) {
        transition: none;
      }

      &:hover {
        background-color: var(--hoverColor);
      }

      svg {
        margin-right: 4px;
        transform: translate(0, -2px);
      }
    }
  }
}
</style>
