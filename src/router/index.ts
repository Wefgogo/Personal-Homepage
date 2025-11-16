import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: 'Home - Yifan Wei'
    }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('@/views/Projects.vue'),
    meta: {
      title: 'Projects - Yifan Wei'
    }
  },
  {
    path: '/resume',
    name: 'Resume',
    component: () => import('@/views/Resume.vue'),
    meta: {
      title: 'Resume - Yifan Wei'
    }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('@/views/Blog.vue'),
    meta: {
      title: 'Blog - Yifan Wei'
    }
  },
  {
    path: '/blog/:id',
    name: 'BlogPost',
    component: () => import('@/views/BlogPost.vue'),
    meta: {
      title: 'Blog Post - Yifan Wei'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/Contact.vue'),
    meta: {
      title: 'Contact - Yifan Wei'
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

router.beforeEach((to, _from, next) => {
  document.title = (to.meta.title as string) || 'Yifan Wei'
  next()
})

export default router
