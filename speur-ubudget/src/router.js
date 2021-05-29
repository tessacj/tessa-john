import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Homepage";
Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/login",
            name: "loginpage",
            component: () => import("./views/Loginpage.vue"),
        },
        {
            path: "/signup",
            name: "signup",
            component: () => import("./views/Signup.vue"),
        },
        {
            path: "/dashboard",
            name: "dashboard",
            component: () => import("./views/DashboardMain.vue"),
            children: [
                {
                    path: '/dashboard',
                    component: () => import("./views/Dashboard.vue"),
                },
                {
                    path: '/budgets',
                    component: () => import("./views/Budgets.vue"),
                },
                {
                    path: '/analytics',
                    component: () => import("./views/Analytics.vue"),
                },
                {
                    path: '/profile',
                    component: () => import("./views/Profile.vue"),
                },
                {
                    path: '/settings',
                    component: () => import("./views/Settings.vue"),
                }
            ]
            // meta: {
            //     requiresAuth: true
            // }
        }
    ],
});
