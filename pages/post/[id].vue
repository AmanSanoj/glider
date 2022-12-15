<template>
  <div>
    <div v-if="post" id="postCard">
      <Post :post="post" />
    </div>
    <div v-else id="error">
      <h1>
        We looked in <span>every bit</span> of our data servers but couldn't
        find the post you're looking for
      </h1>
      <br />
      <NuxtLink to="/">
        <button class="btn">Go back home</button>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const { data: post } = await useFetch(`/api/post?id=${id}`);

useHead({
  title: "Glider | " + (post.value ? post.value.title : "Post Not Found"),
});
</script>

<style lang="scss" scoped>
#error {
  box-sizing: border-box;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8rem 4rem;
  flex-direction: column;

  h1 {
    font-size: 2em;
    font-weight: bold;

    span {
      color: var(--accentColor);
    }
  }

  button {
    border: 2px solid var(--primaryColor);
    border-radius: 5px;
    padding: 5px 15px;
    font-size: 1.1em;
    background-color: transparent;
    color: var(--primaryColor);
    display: inline-block;
    transition: 0.2s ease-in-out;

    &:hover {
      transform: scale(110%);
    }

    &:focus {
      transform: scale(110%);
    }

    &:active {
      transform: scale(90%);
    }
  }
}
</style>
