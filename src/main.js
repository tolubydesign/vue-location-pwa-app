import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './router'

/* components */
import App from './App.vue';
import NavigationBar from './components/navigation/NavigationBar.vue';
import Home from './components/Home.vue';
import Dashboard from './components/Dashboard.vue';
import SearchBar from './components/SearchBar.vue';

Vue.config.productionTip = false;

/* routes */
Vue.use(VueRouter);

// const routes = [
//   { path: '/', component: Home },
//   { path: '/navigation', component: NavigationBar },
//   { path: '/dashboard', component: Dashboard }
// ]

Vue.component('NavigationBar', NavigationBar);
Vue.component('Home', Home);
Vue.component('Dashboard', Dashboard);
Vue.component('SearchBar', SearchBar);

import "./assets/css/main.scss";


new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

