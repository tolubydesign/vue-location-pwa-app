<template>
  <div>
    {{ page }}
  </div>
</template>

<script>
export default {
  name: "PageNotFound",
  data: () => ({
    page: "page not found"
  }),
  computed: {
    boo() {
      return null;
    }
  }
};
</script>

<style lang="scss">

</style>