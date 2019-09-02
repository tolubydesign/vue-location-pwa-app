<template>
  <div id="app">
    <div>
      <ul class="navigation-wrapper-component">
        <li v-for="(link, index) in links" :key="index">
          <router-link :to="link.to">{{ link.name }}</router-link>
        </li>
      </ul>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data: () => ({
    links: [
      {
        name: "Home",
        to: "/"
      },
      {
        name: "Dashboard",
        to: "/dashboard"
      },
      {
        name: "Bad Link",
        to: "/random-bad-url"
      }
    ]
  })
};
</script>

<style scoped lang="scss">
// @import "./assets/css/main.scss";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
li {
  padding: 5px 15px 5px 0;
}
li a {
  text-decoration: none;
  color: black;
}
li a:hover {
  color: #404040;
}
</style>
