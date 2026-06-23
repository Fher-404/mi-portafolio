/* Página de contacto con formulario reactivo (Reactive Forms).
Valida los campos antes de "enviar" y muestra feedback visual
con ion-alert (éxito) e ion-toast (error).
*/

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { ThemeService } from '../../services/theme.service';
import {
  sendOutline, mailOutline, callOutline, logoGithub, logoLinkedin, personOutline,
  moon, sunny
} from 'ionicons/icons';
import {
  IonContent, IonCard, IonCardHeader, IonCardTitle,
  IonCardContent, IonItem, IonLabel, IonInput,
  IonTextarea, IonButton, IonIcon, IonNote, IonList,
  IonSelect, IonSelectOption, IonSpinner, IonAlert, IonToast
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
  standalone: true,
  // Importo ReactiveFormsModule junto a los módulos de Ionic para el formulario reactivo
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonContent, IonCard, IonCardHeader, IonCardTitle,
    IonCardContent, IonItem, IonLabel, IonInput,
    IonTextarea, IonButton, IonIcon, IonNote, IonList,
    IonSelect, IonSelectOption, IonSpinner, IonAlert, IonToast
  ],
})
export class ContactoPage implements OnInit {

  // Este FormGroup almacena el formulario reactivo con todos sus controles y validaciones
  formularioContacto: FormGroup;

  // Estado de envío para mostrar el spinner
  isSubmitting: boolean = false;

  // Esta variable controla si la alerta de mensaje enviado exitosamente está visible
  mostrarAlertaExito: boolean = false;

  // Esta variable controla si el toast de error de validación está visible
  mostrarToastError: boolean = false;

  // Esta variable almacena el texto del mensaje de error que muestra el toast
  mensajeError: string = '';

  // Este arreglo almacena los canales de contacto directo; se itera con @for en el HTML
  canalesContacto = [
    {
      icono: 'mail-outline',
      label: 'Email',
      valor: 'marcanofernando2020@gmail.com',
      href: 'mailto:marcanofernando2020@gmail.com',
    },
    {
      icono: 'call-outline',
      label: 'Teléfono',
      valor: '+58 424 685 4663',
      href: 'https://wa.me/584246854663',
    },
    {
      icono: 'logo-github',
      label: 'GitHub',
      valor: 'github.com/fher-404',
      href: 'https://github.com/fher-404',
    },
    {
      icono: 'logo-linkedin',
      label: 'LinkedIn',
      valor: 'linkedin.com/in/femarc',
      href: 'https://www.linkedin.com/in/femarc',
    },
  ];

  // Defino los botones de la alerta de éxito; el handler cierra la alerta al presionar "Cerrar"
  alertaButtons = [
    {
      text: 'Cerrar',
      handler: () => { this.mostrarAlertaExito = false; },
    },
  ];

  constructor(
    private fb: FormBuilder, 
    private router: Router, 
    public themeService: ThemeService,
    private http: HttpClient
  ) {
    // Registro los íconos usados en esta página con addIcons()
    addIcons({ sendOutline, mailOutline, callOutline, logoGithub, logoLinkedin, personOutline, moon, sunny });

    // Inicializo el formulario reactivo con sus tres controles y sus validaciones
    // Si el formulario es inválido, muestro mensajes de error en el HTML usando los getters
    this.formularioContacto = this.fb.group({
      nombre:  ['', [Validators.required, Validators.minLength(2)]],
      correo:  ['', [Validators.required, Validators.email]],
      asunto:  ['', [Validators.required]],
      empresa: [''],
      mensaje: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]],
    });
  }

  ngOnInit() {
    // Escuchar cambios en el campo "asunto" para hacer "empresa" obligatorio condicionalmente
    this.formularioContacto.get('asunto')?.valueChanges.subscribe((valor) => {
      const empresaControl = this.formularioContacto.get('empresa');
      if (valor === 'empleo') {
        empresaControl?.setValidators([Validators.required, Validators.minLength(2)]);
      } else {
        empresaControl?.clearValidators();
      }
      empresaControl?.updateValueAndValidity();
    });
  }

  // ─── Getters para acceder fácilmente a los controles del formulario en el HTML ───

  // Este getter facilita el acceso al control "nombre" desde el template
  get nombreCtrl() { return this.formularioContacto.get('nombre'); }

  get asuntoCtrl() { return this.formularioContacto.get('asunto'); }
  get empresaCtrl() { return this.formularioContacto.get('empresa'); }

  // Este getter facilita el acceso al control "correo" desde el template
  get correoCtrl() { return this.formularioContacto.get('correo'); }

  // Este getter facilita el acceso al control "mensaje" desde el template
  get mensajeCtrl() { return this.formularioContacto.get('mensaje'); }

  // Envía el correo mediante Formspree
  enviarMensaje(): void {
    if (this.formularioContacto.valid) {
      // Activar estado de carga
      this.isSubmitting = true;

      // Endpoint de Formspree configurado por el usuario
      const formspreeEndpoint = 'https://formspree.io/f/xvzjgppa';

      // Petición POST real a Formspree con los valores del formulario
      this.http.post(formspreeEndpoint, this.formularioContacto.value).subscribe({
        next: () => {
          this.isSubmitting = false;
          this.formularioContacto.reset();
          this.mostrarAlertaExito = true;
        },
        error: (err) => {
          this.isSubmitting = false;
          this.mensajeError = 'Ocurrió un error al enviar el correo. Verifica tu conexión o Endpoint.';
          this.mostrarToastError = true;
          console.error('Error de Formspree:', err);
        }
      });
    } else {
      // Marco todos los campos como tocados para activar la visualización de errores en el HTML
      this.formularioContacto.markAllAsTouched();
      // Establezco el mensaje de error y activo el toast de error
      this.mensajeError = 'Por favor completa todos los campos correctamente.';
      this.mostrarToastError = true;
    }
  }
}
