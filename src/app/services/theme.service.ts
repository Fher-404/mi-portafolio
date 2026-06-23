import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // BehaviorSubject almacena el estado actual y emite a los componentes suscritos
  private darkModeSubject = new BehaviorSubject<boolean>(false);
  
  // Observable público para que los componentes puedan suscribirse usando AsyncPipe
  isDarkMode$ = this.darkModeSubject.asObservable();

  constructor() {
    this.initTheme();
  }

  // Método privado para inicializar el tema al cargar la app
  private initTheme() {
    // 1. Verificamos si el usuario ya guardó una preferencia en LocalStorage
    const savedTheme = localStorage.getItem('darkMode');
    let isDark = false;

    if (savedTheme !== null) {
      // Usamos la preferencia guardada (el valor es un string 'true' o 'false')
      isDark = savedTheme === 'true';
    } else {
      // 2. Si no hay preferencia guardada, usamos el esquema de color del sistema (Windows/Mac/iOS/Android)
      isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    // Aplicamos las clases oscuras si corresponde
    document.documentElement.classList.toggle('ion-palette-dark', isDark);
    document.body.classList.toggle('dark', isDark);

    // Emitimos el estado inicial a todos los componentes
    this.darkModeSubject.next(isDark);
  }

  // Método para alternar el tema globalmente
  toggleTheme() {
    const current = this.darkModeSubject.value;
    const nextTheme = !current;
    
    // Aplicamos o quitamos las clases oscuras al documento
    document.documentElement.classList.toggle('ion-palette-dark', nextTheme);
    document.body.classList.toggle('dark', nextTheme);
    
    // Guardamos la preferencia del usuario en el navegador para futuras visitas
    localStorage.setItem('darkMode', nextTheme.toString());
    
    // Emitimos el nuevo estado a toda la aplicación
    this.darkModeSubject.next(nextTheme);
  }
}
