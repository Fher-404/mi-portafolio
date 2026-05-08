//  Aqui defino las rutas principales de la aplicación con lazy loading.
//  Cada página se carga de forma diferida para optimizar el tiempo
//  de carga inicial. La ruta vacía redirige automáticamente a /inicio.

import { Routes } from '@angular/router';

// Este arreglo contiene las rutas de la app; cada una usa loadComponent
// para cargar el componente de forma lazy (solo cuando el usuario navega ahí)
export const routes: Routes = [
  {
    // Ruta raíz: redirige al usuario a la página de inicio automáticamente
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    // Ruta de la página principal (Inicio)
    path: 'inicio',
    loadComponent: () =>
      import('./pages/inicio/inicio.page').then((m) => m.InicioPage),
  },
  {
    // Ruta de la página de Información Personal
    path: 'informacion',
    loadComponent: () =>
      import('./pages/informacion/informacion.page').then((m) => m.InformacionPage),
  },
  {
    // Ruta de la página de Contacto
    path: 'contacto',
    loadComponent: () =>
      import('./pages/contacto/contacto.page').then((m) => m.ContactoPage),
  },
];
