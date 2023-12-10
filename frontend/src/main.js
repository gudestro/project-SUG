import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import VueSweetalert2 from 'vue-sweetalert2';
import VueTheMask from 'vue-the-mask'
import 'sweetalert2/dist/sweetalert2.min.css';


const api = axios.create({
    baseURL: 'http://localhost:3000/', //url base da sua api
    timeout: 20000 //tempo máximo de espera de resposta
    });



const app = createApp(App);
app.config.globalProperties.$api = api;
app.use(router).use(VueSweetalert2).use(VueTheMask).mount('#app')
