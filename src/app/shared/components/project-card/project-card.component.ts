// Em src/app/shared/components/project-card/project-card.component.ts
import { Component, input } from '@angular/core';
import { Project } from '../../models/project';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router'; // <-- IMPORTE AQUI

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterLink], // <-- ADICIONE AQUI
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  project = input.required<Project>();
}