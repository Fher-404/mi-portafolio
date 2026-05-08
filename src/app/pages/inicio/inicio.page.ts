/*Página de inicio del portafolio. Muestra un saludo dinámico
según la hora del día, el perfil del desarrollador, y un resumen
del stack tecnológico principal.*/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import {
  arrowForwardOutline, codeSlashOutline, menuOutline,
  homeOutline, homeSharp,
} from 'ionicons/icons';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonButtons,
  IonMenuButton, IonCard, IonCardHeader, IonCardTitle,
  IonCardContent, IonButton, IonIcon, IonChip, IonLabel,
  IonBadge, IonAvatar,
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  // Importo todos los componentes de Ionic y Angular que uso en esta página
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonContent, IonButtons,
    IonMenuButton, IonCard, IonCardHeader, IonCardTitle,
    IonCardContent, IonButton, IonIcon, IonChip, IonLabel,
    IonBadge, IonAvatar,
  ],
})
export class InicioPage implements OnInit {

  // Esta variable almacena el saludo dinámico según la hora del día
  saludo: string = '';

  // Esta variable almacena el nombre completo del desarrollador para mostrarlo en el hero
  nombreCompleto: string = 'Fernando Marcano';

  // Este string almacena el eslogan profesional que aparece debajo del nombre
  eslogan: string = 'Estudiante de Ingeniería Informática · Desarrollo de Software y Administración de Sistemas';

  // Esta variable almacena la tecnología destacada que se selecciona aleatoriamente al cargar
  techDestacada: string = '';

  // Este arreglo privado contiene las tecnologías del stack; de aquí selecciono aleatoriamente
  private tecnologias: string[] = [
    'Python', 'TypeScript', 'Docker', 'PostgreSQL',
    'Linux', 'Windows', 'Git', 'GitHub', 'Redes', 'Ciberseguridad',
  ];

  constructor(private router: Router) {
    // Registro los íconos que uso en esta página con addIcons()
    addIcons({ arrowForwardOutline, codeSlashOutline, menuOutline, homeOutline, homeSharp });
  }

  // Este método lo implementé para calcular el saludo según la hora actual del sistema
  obtenerSaludo(): string {
    const hora = new Date().getHours();
    if (hora >= 5 && hora < 12)  return '¡Buenos días!';
    if (hora >= 12 && hora < 19) return '¡Buenas tardes!';
    return '¡Buenas noches!';
  }

  // Este método lo implementé para navegar programáticamente a la página de Información Personal
  verMasSobreMi(): void {
    // Uso Router.navigate para ir a /informacion de forma imperativa
    this.router.navigate(['/informacion']);
  }

  ngOnInit() {
    // Calculo el saludo dinámico al iniciar la página
    this.saludo = this.obtenerSaludo();

    // Selecciono una tecnología aleatoria del arreglo para mostrar en el badge "Hoy estudio"
    const idx = Math.floor(Math.random() * this.tecnologias.length);
    this.techDestacada = this.tecnologias[idx];
  }
}
