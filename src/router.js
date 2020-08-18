import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '*',
    redirect: '/code'
  },
  {
    name: 'love',
    component: () => import('./view/user'),
    meta: {
      title: 'love'
    }
  },
  {
    name: 'cute',
    component: () => import('./view/cart'),
    meta: {
      title: 'love'
    }
  },
  {
    name: 'code',
    component: () => import('./view/goods'),
    meta: {
      title: '身份校验'
    }
  }
];

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

const router = new Router({ routes });

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export {
  router
};
