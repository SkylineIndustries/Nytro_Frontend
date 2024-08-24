// src/router.js

import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './components/HomePage.vue'
import GetHelpPage from './components/GetHelpPage.vue'
import DevelopmentPage from './components/DevelopmentPage.vue'
import DownloadPage from './components/DownloadPage.vue'

Vue.use(Router)

export default new Router({
    mode: 'hash', // of 'history' als je geen hash in de URL wilt
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomePage
        },
        {
            path: '/getHelp',
            name: 'GetHelp',
            component: GetHelpPage
        },
        {
            path: '/development',
            name: 'Development',
            component: DevelopmentPage
        },
        {
            path: '/download',
            name: 'Download',
            component: DownloadPage
        }
    ]
})
