import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../../shared/services/portfolio.service';
import { ProjectCardComponent } from '../../../shared/components/project-card/project-card.component';

@Component({
  selector: 'app-portfolio-list',
  standalone: true,
  // Importamos o ProjectCardComponent para poder usá-lo no template
  imports: [ProjectCardComponent],
  templateUrl: './portfolio-list.component.html',
  styleUrl: './portfolio-list.component.scss'
})
export class PortfolioListComponent {
  private portfolioService = inject(PortfolioService);
  projects = this.portfolioService.getProjects();
}