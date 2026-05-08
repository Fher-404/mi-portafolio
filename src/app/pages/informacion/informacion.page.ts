// ─────────────────────────────────────────────────────────────────────────────
// Archivo: src/app/pages/informacion/informacion.page.ts
// Descripción: Página de información personal del portafolio. Contiene datos
//              personales, formación académica, habilidades técnicas y proyectos.
//              También permite simular la descarga del CV con un toast de feedback.
// ─────────────────────────────────────────────────────────────────────────────

import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import {
  personOutline, locationOutline, mailOutline, logoGithub, logoLinkedin,
  downloadOutline, codeSlashOutline, cloudOutline, constructOutline, languageOutline,
  chevronDownOutline, openOutline,
} from 'ionicons/icons';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonButtons,
  IonMenuButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonButton, IonIcon, IonList, IonItem, IonLabel, IonChip,
  IonAccordionGroup, IonAccordion, IonToast, IonNote,
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

// ─── Interfaz que define la estructura de cada habilidad técnica ───
interface Habilidad {
  nombre: string;
  categoria: 'backend' | 'devops' | 'herramientas' | 'idiomas';
}

// ─── Interfaz que define la estructura de cada proyecto del portafolio ───
interface Proyecto {
  titulo: string;
  descripcion: string;
  tecnologias: string[];
  url?: string;
}

// ─── Interfaz que define la estructura de cada ítem de formación académica ───
interface Educacion {
  institucion: string;
  titulo: string;
  periodo: string;
  descripcion: string;
}

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.page.html',
  styleUrls: ['./informacion.page.scss'],
  standalone: true,
  // Importo todos los componentes de Ionic y Angular que uso en esta página
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonContent, IonButtons,
    IonMenuButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonButton, IonIcon, IonList, IonItem, IonLabel, IonChip,
    IonAccordionGroup, IonAccordion, IonToast, IonNote,
  ],
})
export class InformacionPage implements OnInit {

  // Esta variable controla si el toast de éxito al descargar el CV está visible
  mostrarToast: boolean = false;

  // Esta variable almacena el mensaje que muestra el toast
  mensajeToast: string = '';

  // Este arreglo almacena todas las habilidades técnicas; lo itero con *ngFor en el HTML
  habilidades: Habilidad[] = [
    { nombre: 'Python',                     categoria: 'backend'      },
    { nombre: 'TypeScript',                 categoria: 'backend'      },
    { nombre: 'PostgreSQL',                 categoria: 'backend'      },
    { nombre: 'Linux',                      categoria: 'devops'       },
    { nombre: 'Windows',                    categoria: 'devops'       },
    { nombre: 'Docker',                     categoria: 'devops'       },
    { nombre: 'Redes básicas',              categoria: 'devops'       },
    { nombre: 'Ciberseguridad',             categoria: 'devops'       },
    { nombre: 'Git',                        categoria: 'herramientas' },
    { nombre: 'GitHub',                     categoria: 'herramientas' },
    { nombre: 'Inglés técnico (lectura)',   categoria: 'idiomas'      },
    { nombre: 'Español (nativo)',           categoria: 'idiomas'      },
  ];

  // Este arreglo almacena los proyectos del portafolio; cada uno se renderiza en una ion-card
  proyectos: Proyecto[] = [
    {
      titulo: 'Soporte Técnico en la comunidad "La Libertad"',
      descripcion: 'Mantenimiento preventivo y correctivo de hardware y software. Instalación de sistemas operativos (Windows/Linux), optimización y educación a usuarios.',
      tecnologias: ['Windows', 'Linux', 'Soporte Técnico', 'Hardware'],
    },
    {
      titulo: 'Sistema de Control de Pago a Proveedores',
      descripcion: 'Desarrollo backend para control de pagos con generación de reportes. Implementación de autenticación, roles de acceso, operaciones CRUD y auditoría.',
      tecnologias: ['Django', 'Python', 'PostgreSQL', 'Backend'],
    },
  ];

  // Este arreglo almacena la formación académica; se muestra en acordeones en el HTML
  educacion: Educacion[] = [
    {
      institucion: 'Universidad Nacional Experimental de Telecomunicaciones e Informática (UNETI)',
      titulo: 'Ingeniería Informática',
      periodo: '2023 – 2027 (Cursando)',
      descripcion: 'Penúltimo semestre. Formación integral en ingeniería de software, ciberseguridad e infraestructura tecnológica.',
    },
    {
      institucion: 'UNETI',
      titulo: 'TSU en Informática / Técnico Medio',
      periodo: 'Completado',
      descripcion: 'Técnico Medio en Soporte Técnico a Usuarios y Equipos. Técnico Superior Universitario en Informática.',
    },
    {
      institucion: 'Udemy / CEVAC / CEPAV',
      titulo: 'Cursos y Certificaciones',
      periodo: 'Reciente',
      descripcion: 'Ciberseguridad (36h), Redes de Datos (20h), Mantenimiento (40h), Universidad Python (114h), TypeScript (9h), Git+GitHub (12h).',
    },
  ];

  constructor() {
    // Registro todos los íconos que uso en esta página con addIcons()
    addIcons({
      personOutline, locationOutline, mailOutline, logoGithub, logoLinkedin,
      downloadOutline, codeSlashOutline, cloudOutline, constructOutline, languageOutline,
      chevronDownOutline, openOutline,
    });
  }

  ngOnInit() {}

  // Este método lo implementé para devolver los colores del chip según la categoría de la habilidad
  // Si la categoría es backend, devuelvo azul; devops: teal; idiomas: verde; herramientas: gris
  obtenerColorChip(cat: string): { bg: string; color: string; border: string } {
    if (cat === 'backend')      return { bg: '#1B3A5C', color: '#C4DFF2', border: '#2A5F94' };
    if (cat === 'devops')       return { bg: '#00967F', color: '#E2F9F6', border: '#00C2A8' };
    if (cat === 'idiomas')      return { bg: '#2A4A3C', color: '#A8D5C2', border: '#3D7060' };
    return { bg: '#2C3340', color: '#8892A4', border: '#3D4655' };
  }

  // Este método lo implementé para obtener el ícono de Ionicons según la categoría de la habilidad
  obtenerIconoCategoria(cat: string): string {
    if (cat === 'backend')      return 'code-slash-outline';
    if (cat === 'devops')       return 'cloud-outline';
    if (cat === 'idiomas')      return 'language-outline';
    return 'construct-outline';
  }

  // Este método simula la descarga del CV mostrando un toast de confirmación al usuario
  descargarCV(): void {
    // Muestro el mensaje de éxito en el toast
    this.mensajeToast = 'CV preparado para descarga. ¡Gracias por tu interés!';
    this.mostrarToast = true;
  }
}
