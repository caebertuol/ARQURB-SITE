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
      title: 'Residência no Lago',
      category: 'Residencial',
      coverImage: 'https://images.adsttc.com/media/images/6530/2f88/33a4/1601/7506/238b/large_jpg/casa-na-serra-do-guararu-paulo-mendes-da-rocha_8.jpg',
      description: 'Um projeto moderno com vista para o lago, focado em integração com a natureza.',
      year: 2024
    },
    {
      id: 2,
      title: 'Edifício Corporativo Vértice',
      category: 'Comercial',
      coverImage: 'https://www.galeriadaarquitetura.com.br/wp-content/uploads/2022/01/edificio-toto-i-vigliecca-associados-foto-leonardo-finotti-3.jpg',
      description: 'Design arrojado e sustentável para um centro empresarial de tecnologia.',
      year: 2023
    },
    {
      id: 3,
      title: 'Praça Central',
      category: 'Urbanismo',
      coverImage: 'https://i.pinimg.com/originals/4e/9d/2c/4e9d2c554e1560f60183181822c67f5b.jpg',
      description: 'Revitalização da praça central, criando um novo espaço de convivência para a cidade.',
      year: 2025
    }
  ]);

  constructor() { }

  getProjects() {
    return this.projects.asReadonly(); // Retorna o signal como somente leitura
  }
}