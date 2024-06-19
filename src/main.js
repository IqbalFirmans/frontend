import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import './assets/css/bootstrap.min.css'
import './assets/css/custom.css'
import './assets/js/bootstrap'


import NextPageComponent from './components/NextPageComponent.vue'
import DashboardPage from './pages/DashboardPage.vue'
import FormList from './pages/Forms/FormList.vue'
import FormCreate from './pages/Forms/FormCreate.vue'
import FormDetail from './pages/Forms/FormDetail.vue'


const routes = [
    {
        path: '/',
        component: NextPageComponent,
        beforeEnter(to,from,next) {

            localStorage.getItem('data_user') ? next() : next('/login')
        },
        children : [        
            {path : '', component : DashboardPage},
            {path: 'form', component: FormList, name : 'form'},
            {path: 'form/create', component: FormCreate, name: 'form-create'},
            {path: 'form/:form_id', component: FormDetail, name: 'form-detail'}
        ]
    },
    {
        path : '/login',
        component: () => import('./pages/LoginPage.vue'),
        beforeEnter(to,from,next) {

            localStorage.getItem('data_user') ? next('/') : next()
        }
    }
]


const router = createRouter({
    history : createWebHistory(), routes : routes
})
const app = createApp(App)

app.use(router).mount('#app')