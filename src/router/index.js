import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        component: () =>
            import ("../views/About.vue")
    },
    {
        path: "/sb",
        component: () =>
            import ("../views/ui.vue")
    },
    {
        path: "/ui2",
        component: () =>
            import ("../views/ui2.vue")
    }, {
        path: "/attrs",
        component: () =>
            import ("../views/ui3.vue")
    },
    {
        path: "/va",
        component: () =>
            import ("../views/ui4.vue")
    },
    {
        path: "/mm",
        component: () =>
            import ("../views/ui5.vue")
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;