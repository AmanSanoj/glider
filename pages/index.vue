<template>
  <div class="posts">
    <Post v-for="post in posts" :post="post" />
  </div>
</template>

<script setup>
const { data: posts } = useFetch("/api/posts");

useHead({
  title: "Glider | Home",
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");

* {
  margin: 0;
  padding: 0;
  font-family: "Oswald", sans-serif;
  box-sizing: border-box;
}

:root {
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
  --breakpoint-xxl: 1400px;

  font-size: 62.5%;
}
</style>
