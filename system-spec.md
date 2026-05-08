Eres un experto desarrollador de aplicaciones móviles con Ionic 7+ y Angular 17+.
Necesito que construyas desde cero una aplicación de portafolio personal completa,
documentada, funcional y visualmente profesional. Lee TODAS las instrucciones antes
de generar código.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🛠️ STACK TECNOLÓGICO — OBLIGATORIO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Framework: Ionic 7 + Angular 17 (standalone components)
- Plantilla base: sidemenu (ionic start mi-portafolio sidemenu --type=angular)
- Lenguaje: TypeScript estricto (strict: true en tsconfig)
- Estilos: SCSS (variables globales en src/theme/variables.scss)
- Navegación: Angular Router con lazy loading por página
- Formularios: Angular Reactive Forms (NO Template-driven)
- Generación de páginas:
    ionic generate page pages/inicio
    ionic generate page pages/informacion
    ionic generate page pages/contacto
- Módulos de Ionic a importar en cada página standalone:
  IonHeader, IonToolbar, IonTitle, IonContent, IonButtons,
  IonMenuButton, IonCard, IonCardHeader, IonCardTitle,
  IonCardContent, IonButton, IonIcon, IonList, IonItem,
  IonLabel, IonChip, IonAccordionGroup, IonAccordion,
  IonAvatar, IonInput, IonTextarea, IonAlert, IonToast,
  IonGrid, IonRow, IonCol, IonBadge, IonNote, IonText

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎨 PALETA DE COLORES — OBLIGATORIO EN variables.scss
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Usa exactamente estos valores en src/theme/variables.scss:

:root {
  /* Azul marino oscuro — color principal */
  --ion-color-primary:         #2A5F94;
  --ion-color-primary-rgb:     42, 95, 148;
  --ion-color-primary-shade:   #1B3A5C;
  --ion-color-primary-tint:    #3A80C2;

  /* Teal — acento de acción */
  --ion-color-secondary:       #00C2A8;
  --ion-color-secondary-rgb:   0, 194, 168;
  --ion-color-secondary-shade: #00967F;
  --ion-color-secondary-tint:  #33CEBC;

  /* Fondo oscuro profesional */
  --ion-background-color:      #111318;
  --ion-background-color-rgb:  17, 19, 24;

  /* Superficies */
  --ion-card-background:       #1E2229;
  --ion-item-background:       #1E2229;
  --ion-toolbar-background:    #0D1B2A;
  --ion-tab-bar-background:    #0D1B2A;

  /* Texto */
  --ion-text-color:            #E2E8F0;
  --ion-text-color-rgb:        226, 232, 240;

  /* Bordes y separadores */
  --ion-border-color:          #3D4655;
  --ion-item-border-color:     #2C3340;

  /* Colores personalizados para chips */
  --chip-primary-bg:           #1B3A5C;
  --chip-primary-color:        #C4DFF2;
  --chip-primary-border:       #2A5F94;

  --chip-accent-bg:            #00967F;
  --chip-accent-color:         #E2F9F6;
  --chip-accent-border:        #00C2A8;

  --chip-neutral-bg:           #2C3340;
  --chip-neutral-color:        #8892A4;
  --chip-neutral-border:       #3D4655;

  /* Tipografía */
  --ion-font-family: 'Inter', 'Roboto', sans-serif;
}

Asegúrate de que en la sección @media (prefers-color-scheme: light) se
mantengan los mismos valores (la app siempre usa modo oscuro).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧭 MENÚ LATERAL — app.component.ts + app.component.html
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
En app.component.ts define el arreglo de páginas así:

// Arreglo de páginas del menú lateral
public appPages = [
  { title: 'Inicio',               url: '/inicio',      icon: 'home'           },
  { title: 'Información Personal', url: '/informacion', icon: 'person'         },
  { title: 'Contacto',             url: '/contacto',    icon: 'mail'           },
];

El menú debe tener:
- Header del menú con tu nombre y un subtítulo ("Desarrollador de Software")
- ion-avatar con una imagen circular (src en assets/avatar.jpg)
- Lista de páginas con ion-icon y ion-label
- Footer del menú con versión de la app (v1.0.0)
- Color de fondo del menú: #0D1B2A
- Texto del menú: #E2E8F0
- Ítem activo resaltado con --chip-accent-bg

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🏠 PÁGINA 1: INICIO (inicio.page.ts + inicio.page.html)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TypeScript — inicio.page.ts:
Crea la clase InicioPage con los siguientes elementos:

// Variable que almacena el saludo dinámico según la hora del día
saludo: string = '';

// Variable con el nombre completo del desarrollador
nombreCompleto: string = 'Tu Nombre Completo';

// Eslogan profesional
eslogan: string = 'Backend Developer · DevOps Enthusiast · Problem Solver';

// Tecnología destacada del día (rota aleatoriamente entre tus skills)
techDestacada: string = '';

private tecnologias: string[] = [
  'Docker', 'Node.js', 'TypeScript', 'Python',
  'PostgreSQL', 'AWS', 'DigitalOcean', 'Git'
];

// Método que calcula el saludo; se llama en ngOnInit()
obtenerSaludo(): string {
  const hora = new Date().getHours();
  if (hora >= 5 && hora < 12)  return '¡Buenos días!';
  if (hora >= 12 && hora < 19) return '¡Buenas tardes!';
  return '¡Buenas noches!';
}

// Método para navegar a la página de Información Personal
verMasSobreMi(): void {
  // Usa Router para navegar a /informacion
}

ngOnInit() {
  this.saludo = this.obtenerSaludo();
  // Selecciona tecnología aleatoria del arreglo
  const idx = Math.floor(Math.random() * this.tecnologias.length);
  this.techDestacada = this.tecnologias[idx];
}

HTML — inicio.page.html:
Construye la vista con esta estructura EXACTA:
1. ion-header con ion-toolbar (color primary), ion-menu-button y título "Portafolio"
2. ion-content con padding:
   a) Sección hero:
      - ion-avatar centrado (120x120px, borde 3px solid --chip-accent-bg)
      - h1 con nombreCompleto (font-size: 1.6rem, color: --ion-text-color)
      - p con eslogan (color: --chip-neutral-color, font-style: italic)
      - p con saludo dinámico: "{{ saludo }}" en verde teal (#00C2A8)
      - Badge con techDestacada: "Hoy estudio: [tech]"
   b) ion-card (fondo #1E2229) con:
      - ion-card-header: título "¿Quién soy?"
      - ion-card-content: párrafo de 3-4 líneas describiendo tu perfil
        (Backend developer con enfoque en arquitecturas escalables,
        infraestructura cloud y automatización de sistemas)
      - ion-button expand="block" color="secondary" (click)="verMasSobreMi()"
        texto: "Ver más sobre mí →"
   c) Segunda ion-card con:
      - Título "Stack principal"
      - Muestra 4 chips con las tecnologías principales: Docker, Node.js, TypeScript, PostgreSQL
      - Cada chip con estilos: background var(--chip-primary-bg),
        color var(--chip-primary-color), border 1px solid var(--chip-primary-border)

SCSS — inicio.page.scss:
- .hero-section: text-align center, padding 2rem 1rem
- ion-avatar: width 120px, height 120px, margin auto, border 3px solid #00C2A8
- .saludo-text: font-size 1.1rem, color #00C2A8, font-weight 500, margin-top 8px
- .eslogan: color #8892A4, font-style italic
- ion-card: --background #1E2229, border-radius 12px, margin-bottom 16px
- ion-chip: custom styles usando las variables CSS definidas arriba
- ion-button[color="secondary"]: margin-top 12px

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 PÁGINA 2: INFORMACIÓN PERSONAL
    (informacion.page.ts + informacion.page.html)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TypeScript — informacion.page.ts:
Define estas estructuras de datos con sus interfaces:

interface Habilidad {
  nombre: string;
  categoria: 'backend' | 'devops' | 'herramientas' | 'idiomas';
}

interface Proyecto {
  titulo: string;
  descripcion: string;
  tecnologias: string[];
  url?: string;
}

interface Educacion {
  institucion: string;
  titulo: string;
  periodo: string;
  descripcion: string;
}

// Arreglo de habilidades — iterado con *ngFor en el HTML
habilidades: Habilidad[] = [
  { nombre: 'Docker',                    categoria: 'devops'       },
  { nombre: 'Node.js',                   categoria: 'backend'      },
  { nombre: 'TypeScript',                categoria: 'backend'      },
  { nombre: 'Python',                    categoria: 'backend'      },
  { nombre: 'PostgreSQL',                categoria: 'backend'      },
  { nombre: 'Administración de Sistemas',categoria: 'devops'       },
  { nombre: 'DigitalOcean',              categoria: 'devops'       },
  { nombre: 'AWS',                       categoria: 'devops'       },
  { nombre: 'Git',                       categoria: 'herramientas' },
  { nombre: 'GitHub',                    categoria: 'herramientas' },
  { nombre: 'Inglés para documentación', categoria: 'idiomas'      },
  { nombre: 'Linux',                     categoria: 'devops'       },
  { nombre: 'REST APIs',                 categoria: 'backend'      },
  { nombre: 'CI/CD',                     categoria: 'devops'       },
  { nombre: 'Nginx',                     categoria: 'devops'       },
  { nombre: 'Bash Scripting',            categoria: 'herramientas' },
];

// Método que devuelve el color del chip según categoría
obtenerColorChip(cat: string): {bg: string, color: string, border: string} {
  if (cat === 'backend')      return { bg:'#1B3A5C', color:'#C4DFF2', border:'#2A5F94' };
  if (cat === 'devops')       return { bg:'#00967F', color:'#E2F9F6', border:'#00C2A8' };
  if (cat === 'idiomas')      return { bg:'#2A4A3C', color:'#A8D5C2', border:'#3D7060' };
  return { bg:'#2C3340', color:'#8892A4', border:'#3D4655' };
}

proyectos: Proyecto[] = [
  {
    titulo: 'API REST con Node.js y Docker',
    descripcion: 'Servicio backend containerizado con autenticación JWT, desplegado en DigitalOcean con CI/CD automatizado.',
    tecnologias: ['Node.js', 'TypeScript', 'Docker', 'PostgreSQL', 'DigitalOcean'],
  },
  {
    titulo: 'Infraestructura AWS con automatización',
    descripcion: 'Script de automatización en Python para aprovisionamiento de recursos EC2, S3 y RDS en AWS.',
    tecnologias: ['Python', 'AWS', 'Bash', 'Git'],
  },
  // Agrega un tercero propio del estudiante
];

educacion: Educacion[] = [
  {
    institucion: 'Universidad [Nombre]',
    titulo: 'Ingeniería en Informática',
    periodo: '2022 – presente',
    descripcion: 'Formación en desarrollo de software, redes, bases de datos y sistemas distribuidos.',
  },
  {
    institucion: 'Plataforma online',
    titulo: 'Certificación Docker & DevOps',
    periodo: '2023',
    descripcion: 'Curso intensivo de containerización, orquestación y pipelines de CI/CD.',
  },
];

// Método para simular descarga de CV
descargarCV(): void {
  // Muestra ion-toast con el mensaje de éxito
  // "CV preparado para descarga. ¡Gracias por tu interés!"
}

// Variable para controlar el toast
mostrarToast: boolean = false;
mensajeToast: string = '';

HTML — informacion.page.html:
Estructura COMPLETA con este orden:
1. ion-header con toolbar primary y título "Sobre mí"

2. ion-content con padding:
   a) Sección "Datos personales" — ion-list con ion-item para:
      - Nombre completo (icon: person-outline)
      - Ciudad/País (icon: location-outline)
      - Correo (icon: mail-outline)
      - GitHub (icon: logo-github, con href externo)
      - LinkedIn (icon: logo-linkedin, con href externo)

   b) Sección "Formación académica":
      - Título de sección h2 con estilo consistente
      - ion-accordion-group con ion-accordion para cada ítem de educacion[]
      - En el header de cada accordion: nombre de institución + título
      - En el contenido: periodo y descripción
      - Itera con *ngFor="let edu of educacion"

   c) Sección "Habilidades técnicas":
      - Título h2
      - div.chip-container con flex-wrap
      - *ngFor="let hab of habilidades"
      - Cada ion-chip con [style.background]="obtenerColorChip(hab.categoria).bg"
        [style.color]="obtenerColorChip(hab.categoria).color"
        etc.
      - ion-icon según categoría: code-slash (backend), cloud (devops),
        construct (herramientas), language (idiomas)

   d) Sección "Proyectos":
      - *ngFor="let proy of proyectos"
      - Cada proyecto en ion-card con:
        · ion-card-header con título
        · ion-card-content con descripción
        · Chips de tecnologías (estilo neutral)
        · ion-button (outline, size small) "Ver proyecto"

   e) ion-button expand="block" color="secondary" (click)="descargarCV()":
      texto "Descargar CV" con ion-icon download-outline

   f) ion-toast [isOpen]="mostrarToast" [message]="mensajeToast"
      duration="3000" color="success" position="bottom"

SCSS — informacion.page.scss:
- .section-title: font-size 1rem, font-weight 600, color #3A80C2,
  text-transform uppercase, letter-spacing 1.5px, margin 20px 0 10px
- .chip-container: display flex, flex-wrap wrap, gap 8px
- ion-chip: font-size 12px, height 28px, transition all 0.2s,
  border con 1px solid (color dinámico)
- ion-accordion: --background #1E2229, --border-color #3D4655
- ion-card: --background #1E2229, border-left 3px solid #00C2A8

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📧 PÁGINA 3: CONTACTO
    (contacto.page.ts + contacto.page.html)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TypeScript — contacto.page.ts:
USA REACTIVE FORMS (FormBuilder + Validators):

// Formulario reactivo para el contacto
formularioContacto: FormGroup;

// Variables para controlar alertas y toasts
mostrarAlertaExito: boolean = false;
mostrarToastError: boolean  = false;
mensajeError: string        = '';

constructor(private fb: FormBuilder, private router: Router) {
  // Inicialización del formulario con validaciones
  this.formularioContacto = this.fb.group({
    nombre:  ['', [Validators.required, Validators.minLength(2)]],
    correo:  ['', [Validators.required, Validators.email]],
    mensaje: ['', [Validators.required, Validators.minLength(10)]],
  });
}

// Método que valida y procesa el envío del formulario
enviarMensaje(): void {
  if (this.formularioContacto.valid) {
    // Limpia el formulario y muestra alerta de éxito
    this.formularioContacto.reset();
    this.mostrarAlertaExito = true;
  } else {
    // Marca todos los campos como tocados para mostrar errores
    this.formularioContacto.markAllAsTouched();
    this.mensajeError = 'Por favor completa todos los campos correctamente.';
    this.mostrarToastError = true;
  }
}

// Getters para facilitar el acceso a los controles en el HTML
get nombreCtrl()  { return this.formularioContacto.get('nombre');  }
get correoCtrl()  { return this.formularioContacto.get('correo');  }
get mensajeCtrl() { return this.formularioContacto.get('mensaje'); }

// Arreglo de canales de contacto directo
canalesContacto = [
  { icono: 'mail-outline',     label: 'Email',      valor: 'tuemail@ejemplo.com', href: 'mailto:tuemail@ejemplo.com' },
  { icono: 'call-outline',     label: 'Teléfono',   valor: '+XX 123 456 789',     href: 'tel:+XX123456789'          },
  { icono: 'logo-github',      label: 'GitHub',     valor: 'github.com/tuusuario', href: 'https://github.com/tuusuario' },
  { icono: 'logo-linkedin',    label: 'LinkedIn',   valor: 'linkedin.com/in/tuusuario', href: 'https://linkedin.com/in/tuusuario' },
];

HTML — contacto.page.html:
1. ion-header con toolbar primary, título "Contacto"

2. ion-content con padding:
   a) Tarjeta de formulario (ion-card, fondo #1E2229):
      - Título "Envíame un mensaje"
      - ion-item para campo "nombre":
        · ion-label position="floating": Nombre completo
        · ion-input formControlName="nombre" type="text"
        · ion-note color="danger" *ngIf="nombreCtrl?.invalid && nombreCtrl?.touched"
          mostrando "El nombre es obligatorio"
      - ion-item para campo "correo":
        · ion-label position="floating": Correo electrónico
        · ion-input formControlName="correo" type="email"
        · ion-note color="danger" *ngIf="correoCtrl?.invalid && correoCtrl?.touched"
          con mensajes diferenciados (requerido vs. formato inválido)
      - ion-item para campo "mensaje":
        · ion-label position="floating": Mensaje
        · ion-textarea formControlName="mensaje" rows="4"
        · ion-note color="danger" *ngIf="mensajeCtrl?.invalid && mensajeCtrl?.touched"
      - ion-button expand="block" color="secondary" (click)="enviarMensaje()":
        "Enviar mensaje" + ion-icon send-outline

   b) Sección "O contáctame directamente":
      - ion-list con *ngFor="let canal of canalesContacto"
      - Cada ion-item con [href]="canal.href" detail="true":
        · ion-icon [name]="canal.icono" slot="start" color="secondary"
        · ion-label: título + ion-note con valor
      - Efecto hover con fondo ligeramente más claro

   c) ion-alert [isOpen]="mostrarAlertaExito"
      header="¡Mensaje enviado!"
      message="Gracias por contactarme. Te responderé pronto."
      [buttons]="[{ text: 'Cerrar', handler: () => mostrarAlertaExito = false }]"

   d) ion-toast [isOpen]="mostrarToastError" [message]="mensajeError"
      duration="3000" color="danger" position="bottom"

SCSS — contacto.page.scss:
- ion-card: --background #1E2229, border-radius 12px
- ion-item: --background #1E2229, --border-color #3D4655
- ion-input, ion-textarea: --color #E2E8F0, --placeholder-color #8892A4
- ion-label[position="floating"]: color #6BAED6 cuando está activo
- ion-note[color="danger"]: font-size 11px, padding-left 16px
- .seccion-titulo: igual que en informacion (reutiliza la clase)
- ion-button[color="secondary"]: --border-radius 8px, font-weight 600

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 DOCUMENTACIÓN DE CÓDIGO — OBLIGATORIO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
En CADA archivo TypeScript que generes, añade comentarios
en primera persona que expliquen:
- Qué hace cada variable ("Esta variable almacena...")
- Por qué creé cada método ("Este método lo implementé para...")
- Cómo funciona cada bucle ("Aquí recorro el arreglo usando *ngFor...")
- Qué controla cada condición ("Si el formulario es inválido, muestro...")

No documentes imports automáticos ni decoradores @Component genéricos.
Documenta SOLO lo que tú escribiste: variables, métodos, getters, lógica.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📁 ARCHIVOS QUE DEBES ENTREGAR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. src/theme/variables.scss          (paleta completa)
2. src/app/app.component.ts          (menú lateral con appPages)
3. src/app/app.component.html        (menú lateral)
4. src/app/app.routes.ts             (rutas con lazy loading)
5. src/app/pages/inicio/inicio.page.ts
6. src/app/pages/inicio/inicio.page.html
7. src/app/pages/inicio/inicio.page.scss
8. src/app/pages/informacion/informacion.page.ts
9. src/app/pages/informacion/informacion.page.html
10. src/app/pages/informacion/informacion.page.scss
11. src/app/pages/contacto/contacto.page.ts
12. src/app/pages/contacto/contacto.page.html
13. src/app/pages/contacto/contacto.page.scss

Entrega cada archivo de forma separada, indicando la ruta completa
al inicio de cada bloque de código. No omitas ninguno.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️ REGLAS FINALES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Usa SOLO componentes standalone (no NgModules)
- Todos los imports de Ionic en el array imports[] de cada componente
- Reactive Forms: importa ReactiveFormsModule en el componente standalone
- Usa addIcons() de ionicons para cada icono que uses
- NO uses ion-slides (deprecado); si necesitas carousel usa Swiper directamente
- La app debe compilar sin errores con: ionic serve
- Los colores del tema oscuro se aplican siempre; no detectes preferencia del sistema
- Todos los formularios usan FormBuilder, no template-driven forms
- Los métodos de navegación usan inject(Router) o el constructor