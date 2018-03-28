import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'
import NotFound from '../components/NotFound'

const routerOptions = [
  { path: '/', component: 'Landing' },
  { path: '/signin', component: 'Signin' },
  { path: '/signup', component: 'Signup' },
  { path: '/book', component: 'Book', meta: { requiresAuth: true } },
  { path: '/loja', component: 'Loja', meta: { requiresAuth: true } },
  { path: '/cliente', component: 'Cliente', meta: { requiresAuth: true } },
  { path: '/home', component: 'Home', meta: { requiresAuth: true } },
  { path: '/fornecedor', component: 'Fornecedor', meta: { requiresAuth: true } },
  { path: '/localidades', component: 'Localidades', meta: { requiresAuth: true } },
  { path: '/produtos', component: 'Produtos', meta: { requiresAuth: true } },
  { path: '/secao', component: 'Secao', meta: { requiresAuth: true } },
  { path: '/pedido', component: 'Pedido', meta: { requiresAuth: true } },
  { path: '/tipo', component: 'Tipo', meta: { requiresAuth: true } },
  { path: '/colegio', component: 'Colegio', meta: { requiresAuth: true } },
  { path: '/produtosev', component: 'Produtoserv', meta: { requiresAuth: true } },
  { path: '/golas', component: 'Golas', meta: { requiresAuth: true } },
  { path: '/punhos', component: 'Punhos', meta: { requiresAuth: true } },
  { path: '/ribana', component: 'Ribana', meta: { requiresAuth: true } },
  { path: '/pdf', component: 'Pdf', meta: { requiresAuth: true } },
  { path: '/vendedor', component: 'Vendedor', meta: { requiresAuth: true } }
]


const routes = routerOptions.map(route => {
  return {
    path: route.path,
    component: () => import(`../components/${route.component}.vue`),
    meta: route.meta
  }
})

Vue.use(Router)

const router = new Router({
//  mode: 'history',
  routes: [
    ...routes,
    { path: '*', component: NotFound }
  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const user = firebase.auth().currentUser
  if (requiresAuth && !user) {
    next('/signin')
  }
  next()
})

export default router
