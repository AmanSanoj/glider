<template>
  <div>
    <h2>Appearance</h2>
    Theme :
    <div class="select">
      <select v-model="$colorMode.preference">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="sepia">Sepia</option>
        <option value="abyss">Abyss</option>
      </select>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Glider | Settings",
});
</script>

<style lang="scss" scoped>
.select {
  position: relative;
  display: inline-block;

  select {
    appearance: none;
    background-color: transparent;
    color: var(--primaryColor);
    border: 2px solid var(--borderColor);
    border-radius: 5px;
    padding: 2px 10px;
    background-color: transparent;
    outline: none;
    display: inline-block;
  }
}
</style>
