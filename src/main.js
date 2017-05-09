import Vue from 'vue';

import App from './App.vue'
import jwButton from './plugins'
Vue.use(jwButton);
import { router } from './router.js'
new Vue({
    el:'#app',
    ...App,
    router
});