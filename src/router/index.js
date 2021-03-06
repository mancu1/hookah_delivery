import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/prices",
    name: "prices",
    component: () => import("@/views/prices.vue"),
  },
  {
    path: "/delivery",
    name: "delivery",
    component: () => import("@/views/delivery.vue"),
  },
  {
    path: "/contacts",
    name: "contacts",
    component: () => import("@/views/contacts.vue"),
  },
  {
    path: "/services",
    name: "services",
    component: () => import("@/views/services.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    const scrl = document.getElementById(scroll);
    if (scrl) {
      return window.scrollTo({
        top: scrl.offsetTop,
        behavior: "smooth",
      });
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
