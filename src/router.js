import Vue from 'vue'
import Router from 'vue-router'

// Page content
import Components from './shared-components.js';
import NavigationBar from './components/navigation/NavigationBar.vue';
import Home from './components/Home.vue';
import Dashboard from './components/Dashboard.vue';

// Fallback page
import PageNotFound from './components/PageNotFound.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard },
    { path: '/navigation', name: 'NavigationBar', component: NavigationBar },
    { path: '**', name: 'PageNotFound', component: PageNotFound },
  ]
})