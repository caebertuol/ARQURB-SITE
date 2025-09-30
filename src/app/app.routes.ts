// Em src/app/app.routes.ts

import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        // Rota da Home agora com Lazy Loading
        loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'portfolio',
        // Nova rota do Portfólio com Lazy Loading
        loadComponent: () => import('./features/portfolio/portfolio-list/portfolio-list.component').then(m => m.PortfolioListComponent)
    },
    {
        path: 'contato',
        // Nova rota de Contato com Lazy Loading
        loadComponent: () => import('./features/contact/contact-page/contact-page.component').then(m => m.ContactPageComponent)
    }

    // A rota de detalhe do projeto '/portfolio/:id' será adicionada depois
];