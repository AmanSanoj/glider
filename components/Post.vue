<template>
  <div id="postCard">
    <NuxtLink :to="`/post/${id}`"
      ><div><img v-if="thumbnail" :src="thumbnail" alt="Thumbnail" /></div>
      <div>
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
      </div></NuxtLink
    >
  </div>
</template>

<script setup>
const props = defineProps({
  post: Object,
});
const { title, description, thumbnail, id } = props.post;
</script>

<style lang="scss" scoped>
#postCard {
  border: 2px solid var(--borderColor);
  border-radius: 20px;
  margin: 2.1rem 0;
  padding: 2.1rem;
  display: flex;

  h1 {
    font-size: 1.2em;
  }

  &:nth-child(1) {
    margin-top: 0;
  }
}
</style>
