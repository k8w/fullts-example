import { FulltsApp } from 'fullts';
import Layout from './views/Layout';

let app = new FulltsApp({
    serverUrl: 'http://localhost:3001',
    routes: [
        { path: '/', component: () => import('./views/HomeView'), layout: () => import('./views/Layout') },     // layout将延迟加载
        { path: '/sub', component: () => import('./views/SubView'), layout: () => import('./views/Layout') },   // layout将延迟加载
        { path: '/sub/:id', component: () => import('./views/SubView'), layout: Layout },   // layout将同步加载
        { path: '*', component: () => import('./views/Page404') }   // 404页面
    ],
    onRouteChange: e => {
        console.log(e);
    }
})

app.renderTo(document.getElementById('app-root')!);
