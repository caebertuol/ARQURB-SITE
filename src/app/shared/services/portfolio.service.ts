import { Injectable, signal } from '@angular/core';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  
  public getProjectById(id: number) {
  // Usamos o método .find() do array para encontrar o projeto com o ID correspondente
  const project = this.projects().find(p => p.id === id);
  return signal(project); // Retornamos um novo signal com o projeto encontrado (ou undefined)
}

  private projects = signal<Project[]>([
    {
      id: 1,
      title: 'Expográfico Barra Mansa',
      category: 'Expografia',
      coverImage: '',
      description: 'Galeria, Arte em 3D, Conceito de Arquitetura',
      year: 2025
    },
    {
      id: 2,
      title: 'Museu Niterói',
      category: 'Expografia',
      coverImage: '',
      description: 'Galeria, Arte em 3D, Conceito de Arquitetura',
      year: 2023
    },
    {
      id: 3,
      title: 'Campeonato de Jiu-Jitsu Vila São Braz',
      category: 'Cenografia',
      coverImage: '',
      description: 'Cenografia, 3D, Arquitetura Esportiva',
      year: 2024
    },

    {
      id: 4,
      title: 'Praça Giramundo',
      category: 'Urbanismo',
      coverImage: '',
      description: 'Urbanismo, Espaço Público, Projeto Paisagístico',
      year: 2024
    },

    {
      id: 5,
      title: 'Residencial em Estância Velha',
      category: 'Cenografia',
      coverImage: '',
      description: 'Arquitetura Residencial, Design Exterior, Sustentabilidade',
      year: 2024
    },

    {
      id: 6,
      title: 'Caixa Cultural',
      category: 'Expografia',
      coverImage: '',
      description: 'Arte, Cultura, Espaço Público',
      year: 2024
    },

    {
      id: 7,
      title: 'CuscoBox - Espaço Pet',
      category: 'Arquitetura Comercial',
      coverImage: '',
      description: 'Arquitetura Comercial, Design de Interiores',
      year: 2024
    },

    {
      id: 8,
      title: 'Life Treinamento Funcional',
      category: 'Arquitetura Comercial',
      coverImage: '',
      description: 'Design de Interiores, Espaço Fitness, Bem-estar',
      year: 2025
    }
  ]);

  constructor() { }

  getProjects() {
    return this.projects.asReadonly(); // Retorna o signal como somente leitura
  }
}