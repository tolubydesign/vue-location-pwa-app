<template>
  <div>
    <div class="">
      <img src alt="information" />
      <p class="fullbringer">{{ string }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
  data() {
    return {
      string: "strung along"
    };
  }
};
</script>

<style scoped>
</style>
