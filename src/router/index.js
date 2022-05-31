import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Home from "@/views/Home";
import Register from "@/views/Register";
import Profile from "@/views/Profile";
import Unauthorized from "@/views/Unauthorized";
import Login from "@/views/Login";
import Admin from "@/views/Admin";
import NotFound from "@/views/NotFound";

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    name: 'home',
    path: '/home',
    component: Home,
  },
  {
    name: 'login',
    path: '/login',
    component: Login,
  },
  {
    name: 'register',
    path: '/register',
    component: Register,
  },
  {
    name: 'profile',
    path: '/profile',
    component: Profile,
  },
  {
    name: 'admin',
    path: '/admin',
    component: Admin,
  },
  {
    name: '404',
    path: '/404',
    component: NotFound,
  },
  {
    name: '401',
    path: '/401',
    component: Unauthorized,
  },
    //Otherwise unknown pages
  {
    path: "/:CatchAll(.*)",
    redirect: '/404'
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
