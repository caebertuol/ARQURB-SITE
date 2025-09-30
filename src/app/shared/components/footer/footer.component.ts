import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'; // Para a barra do rodapé
import { MatIconModule } from '@angular/material/icon';     // Para os ícones
import { MatButtonModule } from '@angular/material/button';   // Para os botões de ícone

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear(); // Pega o ano atual dinamicamente
}
