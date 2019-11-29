/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

 import App from './App.vue';
 import ElementUI from 'element-ui';
 import 'element-ui/lib/theme-chalk/index.css';
 import VueResource from 'vue-resource';
 import Vuelidate from 'vuelidate';
 import VueRouter from 'vue-router';
 import { routes } from './routes';
 import VueLocalStorage from 'vue-localstorage';
 Vue.use(ElementUI);
 Vue.use(VueResource);
 Vue.use(VueRouter);
 Vue.use(Vuelidate);
const router = new VueRouter({
                routes,
                mode: 'history'
              });

 const app = new Vue({
   el: '#app',
   router,
   render: h => h(App)
 });
