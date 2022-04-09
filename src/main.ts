import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

// axios.defaults.baseURL = "http://localhost:8080/api/";
// axios.defaults.withCredentials= true

axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('influencer_token')}`;

createApp(App).use(store).use(router).mount('#app')
