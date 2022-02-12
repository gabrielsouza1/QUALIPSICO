import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

const page = path => () => import(`~/pages/${path}`).then(m => m.default || m);

const routes = [
  { path: "/", name: "index", component: page("index.vue") },
  { path: "/login", name: "login", component: page("auth/login.vue") },
  { path: "/register", name: "register", component: page("auth/register.vue") },
  {
    path: "/verification/verify/:id",
    name: "verify",
    component: page("auth/verification/verify.vue")
  },
  {
    path: "/verification/resend",
    name: "verification.resend",
    component: page("auth/verification/resend.vue")
  },
  {
    path: "/password/email",
    name: "password.email",
    component: page("auth/password/reset-email.vue")
  },
  {
    path: "/password/reset/:token",
    name: "password.reset",
    component: page("auth/password/password-reset.vue")
  },
  {
    path: "/dashboard/especialistas",
    name: "dashboard.patients.specialists",
    component: page("dashboard/patients/especialistas.vue")
  },
  {
    path: "/dashboard/planos",
    name: "dashboard.patients.plans",
    component: page("dashboard/patients/planos.vue")
  },
  {
    path: "/dashboard/sessoes",
    name: "dashboard.patients.sessions",
    component: page("dashboard/patients/sessoes.vue")
  },
  {
    path: "/dashboard/profissionais",
    name: "dashboard.profissionais.home",
    component: page("dashboard/professionals/home.vue")
  },
  {
    path: "/dashboard/profissionais/meus-clientes",
    name: "dashboard.profissionais.clients",
    component: page("dashboard/professionals/clientes.vue")
  },
  {
    path: "/dashboard/profissionais/agendamentos",
    name: "dashboard.profissionais.appointments",
    component: page("dashboard/professionals/agendamentos.vue")
  },
  {
    path: "/dashboard/profissionais/minha-conta",
    name: "dashboard.profissionais.my-account",
    component: page("dashboard/professionals/minha-conta.vue")
  }
];

export function createRouter() {
  return new Router({
    routes,
    mode: "history"
  });
}
