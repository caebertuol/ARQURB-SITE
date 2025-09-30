import { Component, OnInit, signal, WritableSignal, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PortfolioService } from '../../../shared/services/portfolio.service';
import { Project } from '../../../shared/models/project';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-portfolio-detail',
  standalone: true,
  imports: [RouterLink, MatButtonModule],
  templateUrl: './portfolio-detail.component.html',
  styleUrl: './portfolio-detail.component.scss'
})
export class PortfolioDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private portfolioService = inject(PortfolioService);

  public project: WritableSignal<Project | undefined> = signal(undefined);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const projectId = +id; // O '+' converte a string para número
      this.project = this.portfolioService.getProjectById(projectId);
    }
  }
}