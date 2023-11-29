import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CargoIndexView from '../views/Cargo/CargoIndexView'
import CargoFormView from '../views/Cargo/CargoFormView'
import EmpresaExecutoraFormView from '../views/EmpresaExecutora/EmpresaExecutoraFormView';
import EmpresaExecutoraIndexView from '../views/EmpresaExecutora/EmpresaExecutoraIndexView';
import ColaboradorFormView from '../views/Colaborador/ColaboradorFormView';
import ColaboradorIndexView from '../views/Colaborador/ColaboradorIndexView';


const routes = [
  
  {
    path: '/cargo/index',
    name: 'cargoIndex',
    component: CargoIndexView
  },
  {
    path: '/cargo/form/',
    name: 'cargoFormAdd',
    component: CargoFormView,
  },
  {
    path: '/cargo/form/:cargoId',
    name: 'cargoForm',
    component: CargoFormView,
    props: true 
  },
  {
    path: '/empresaexecutora/index',
    name: 'empresaIndex',
    component: EmpresaExecutoraIndexView
  },
  {
    path: '/empresaexecutora/form',
    name: 'empresaFormAdd',
    component: EmpresaExecutoraFormView,
  },
  {
    path: '/empresaexecutora/form/:empresaId',
    name: 'empresaForm',
    component: EmpresaExecutoraFormView,
    props: true 
  },
  {
    path: '/colaborador/index',
    name: 'colaboradorIndex',
    component: ColaboradorIndexView
  },
  {
    path: '/colaborador/form',
    name: 'colaboradorFormAdd',
    component: ColaboradorFormView,
  },
  {
    path: '/colaborador/form/:colaboradorId',
    name: 'colaboradorForm',
    component: ColaboradorFormView,
    props: true 
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
