// Punto de entrada de la aplicación Angular standalone.
// Uso bootstrapApplication (Angular 17) en lugar del AppModule
// para aprovechar los componentes standalone y el tree-shaking.

import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

// Arranco la aplicación usando el nuevo sistema standalone de Angular 17
bootstrapApplication(AppComponent, {
  providers: [
    // Estrategia de reutilización de rutas de Ionic (necesaria para navegación correcta)
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // Configuración de Ionic en modo standalone
    provideIonicAngular(),
    // Configuración del router con lazy loading para todas las rutas
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});
