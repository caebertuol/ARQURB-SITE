// Em src/app/app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path: 'login',
    loadComponent: () => import('./features/auth/login-page/login-page.component').then(m => m.LoginPageComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./features/auth/register-page/register-page.component').then(m => m.RegisterPageComponent)
},
    {
        path: '',
        loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'portfolio', // A lista de projetos
        loadComponent: () => import('./features/portfolio/portfolio-list/portfolio-list.component').then(m => m.PortfolioListComponent)
    },
    {
        path: 'portfolio/:id', // A NOVA ROTA para o detalhe de um projeto
        loadComponent: () => import('./features/portfolio/portfolio-detail/portfolio-detail.component').then(m => m.PortfolioDetailComponent)
    },
    {
        path: 'contato',
        loadComponent: () => import('./features/contact/contact-page/contact-page.component').then(m => m.ContactPageComponent)
    }
];