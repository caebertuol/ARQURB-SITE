import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'; // Importe a Toolbar
import { MatButtonModule } from '@angular/material/button';   // Importe o Button
import { RouterLink } from '@angular/router';                 // Importe o RouterLink

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}