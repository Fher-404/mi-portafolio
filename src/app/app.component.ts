/*
 * Componente raíz standalone de la aplicación.
 * Contiene la definición del menú lateral (side menu) con la
 * lista de páginas navegables y los datos del desarrollador.
 */

import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from './services/theme.service';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import {
  home, homeOutline, homeSharp,
  person, personOutline, personSharp,
  mail, mailOutline, mailSharp,
  moonOutline, sunnyOutline
} from 'ionicons/icons';
import {
  IonApp, IonRouterOutlet, IonHeader, IonToolbar,
  IonTitle, IonButtons, IonButton, IonIcon
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  // Importo todos los módulos de Ionic y Angular necesarios para la barra superior
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    IonApp,
    IonRouterOutlet,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonIcon
  ],
})
export class AppComponent {

  // Este arreglo almacena las páginas del menú lateral;
  // cada objeto tiene título, URL de navegación e icono de Ionicons
  public appPages = [
    { title: 'Inicio',               url: '/inicio',      icon: 'home'   },
    { title: 'Información Personal', url: '/informacion', icon: 'person' },
    { title: 'Contacto',             url: '/contacto',    icon: 'mail'   },
  ];

  constructor(public themeService: ThemeService) {
    // Registro los íconos que uso en el menú lateral con addIcons()
    // para que Ionicons los incluya correctamente en modo standalone
    addIcons({
      home, homeOutline, homeSharp,
      person, personOutline, personSharp,
      mail, mailOutline, mailSharp,
      moonOutline, sunnyOutline
    });
  }
}
