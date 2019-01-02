import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import store from './store';
import AuthHandler from './components/AuthHandler';
import ImageList from './components/ImageList';
import UploadForm from './components/UploadForm';
import FavoriteList from './components/FavoriteList';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: ImageList
    },
    {
      path: '/upload',
      component: UploadForm
    },
    {
      path: '/favorite',
      component: FavoriteList
    },
    {
      name:'AuthHandler',
      path: '/oauth2/callback',
      component: AuthHandler,
    },
  ],
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
