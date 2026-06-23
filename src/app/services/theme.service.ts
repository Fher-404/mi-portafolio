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
    // Al iniciar la app, verificamos el estado inicial de las clases
    const isDark = document.documentElement.classList.contains('ion-palette-dark') || document.body.classList.contains('dark');
    this.darkModeSubject.next(isDark);
  }

  // Método para alternar el tema globalmente
  toggleTheme() {
    const current = this.darkModeSubject.value;
    const nextTheme = !current;
    
    // Aplicamos o quitamos las clases oscuras al documento
    document.documentElement.classList.toggle('ion-palette-dark', nextTheme);
    document.body.classList.toggle('dark', nextTheme);
    
    // Emitimos el nuevo estado a toda la aplicación
    this.darkModeSubject.next(nextTheme);
  }
}
