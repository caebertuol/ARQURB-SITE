import { Component, Input, input } from '@angular/core';
import { Project } from '../../models/project';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule], // Importa os módulos do Material
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  // Usando a nova função 'input' para criar um input obrigatório
  project = input.required<Project>();
}