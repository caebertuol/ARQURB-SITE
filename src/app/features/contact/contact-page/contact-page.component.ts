import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // 1. Importações para Forms

// 2. Importações para os componentes do Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [
    ReactiveFormsModule, // 3. Adicione aqui
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {
  private fb = inject(FormBuilder); // Injeta o FormBuilder

  // Define a estrutura do formulário com seus controles e validadores
  contactForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  // Flag para controlar se o formulário foi submetido
  submitted = false;

  // Método que será chamado ao enviar o formulário
  onSubmit(): void {
    this.submitted = true;

    if (this.contactForm.invalid) {
      console.log("Formulário inválido.");
      return; // Para a execução se o formulário for inválido
    }

    // Se o formulário for válido, mostramos os dados no console
    console.log("Formulário enviado com sucesso!");
    console.log(this.contactForm.value);

    // Aqui, futuramente, você enviaria os dados para um backend (como o Firebase)
    this.contactForm.reset();
    this.submitted = false;
  }
}