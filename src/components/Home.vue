<template>
  <div>
    {{ boo }}
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    boo: "following"
  }),
  computed: {
    boo() {
      return null;
    }
  }
};
</script>

<style lang="scss">
.something {
  .something-else {
  }
}
</style>