import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common'; // Necessário para o ngIf
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {
  private fb = inject(FormBuilder);

  registerForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required],
    terms: [false, Validators.requiredTrue] // Inicia desmarcado e é obrigatório marcar (true)

  });

  onRegister(): void {
    if (this.registerForm.get('password')?.value !== this.registerForm.get('confirmPassword')?.value) {
      alert('As senhas não coincidem!');
      return;
    }

    if (this.registerForm.valid) {
      console.log('Dados do cadastro:', this.registerForm.value);
      alert('Cadastro simulado com sucesso! Verifique o console (F12).');
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  }
}