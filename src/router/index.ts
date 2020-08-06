import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Category from "../views/Category.vue";

import { navBarContent } from "@/constant/pageState";

Vue.use(VueRouter);

const newRoutes: Array<RouteConfig> = navBarContent.map((navBarItem:any) => {
  return {
    path: navBarItem.navUrl,
    name: navBarItem.navName,
    component: Home,
    // children: navBarItem
    //   ? navBarItem.subNav?.map((subNavItem) => {
    //       return {
    //         path: subNavItem.navUrl,
    //         name: subNavItem.navName,
    //         component: Home,
    //       };
    //     })
    //   : undefined,
  };
});

console.log("navBarContent",navBarContent)
console.log("newRoutes",newRoutes)

const routes: Array<RouteConfig> = [
  // {
  //   path: "/",
  //   redirect: "/home",
  // },
  {
    path: "/home",
    name: "Home",
    component: () => import('@/views/Home.vue'),
  },
  {
    path:"/category",
    name:"Category",
    component:() => import('@/views/Category.vue'),
    children:[
      {
        path: "tags",
        name: "ByTag",
        component: () => import('@/views/ByTag.vue'),
      },
      {
        path: "series",
        name: "BySeries",
        component: () => import('@/views/BySeries.vue'),
      },
      {
        path: "date",
        name: "ByDate",
        component: () => import('@/views/ByDate.vue'),
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/About.vue')
  },
];

console.log("routes",routes)
console.log("eq",routes==newRoutes)

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
