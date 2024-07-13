<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.pb-0.pb-md-0
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Construcción del #[em front-end] de la aplicación web
    
    p.mb-4 Para esta sección se plantea generar una sola vista, que corresponde al formulario de registro de empleados. Por esta razón, no es necesario generar #[em sketch] o maquetación para evaluar la navegación entre distintos componentes. No obstante, se emplean buenas prácticas de diseño amparadas en las técnicas y tecnologías como #[em Materialize], que dará alcance a varias reglas de estilo para los sistemas interactivos de #[em software].

    .fondo-personalizado-1.f4.mb-4
      .fondo-personalizado-1__contenido.pt-5.pb-5
        .row.justify-content-center
          .col-lg-8
            .bloque-codigo-personalizado(data-aos="flip-up")
              .cabecera-bloque-codigo.p-4.py-3
                .bloque-codigo-circulos 
                  .bloque-codigo-circulo.c1
                  .bloque-codigo-circulo.c2
                  .bloque-codigo-circulo.c3
              .cuerpo-bloque-codigo.p-4
                code.text-wrap
                  span.fs-i plaintext
                  br
                  span.fs-i PS D:\gestion-empleados> npm install -g @angular/cli
                  br
                  span.fs-i npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
                  br
                  span.fs-i npm WARN deprecated har-validator@5.1.5: this library is no longer supported
                  br
                  span.fs-i npm WARN deprecated uuid@3.4.0: Please upgrade to version 7 or higher. See https://v8.dev/blog/math-random for details.
    
    Separador

    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Instalación y configuración de AngularJS

    .row.mb-5.py-3
      .col-auto.d-none.d-md-block 
        figure
          img.mx-auto(src="@/assets/curso/temas/7.svg",style="max-width: 85px;")
      .col 
        p.mb-0 A continuación se presenta la estructura de directorios del proyecto Angular creado con el comando #[b ng new frontend:]

    .fondo-personalizado-1.pos-bottom.pos-full.f5.mb-5
      .fondo-personalizado-1__contenido.pb-5
        .row.justify-content-center.mb-5
          .col-lg-8
            .bloque-codigo-personalizado(data-aos="flip-up")
              .cabecera-bloque-codigo.p-4.py-3
                .bloque-codigo-circulos 
                  .bloque-codigo-circulo.c1
                  .bloque-codigo-circulo.c2
                  .bloque-codigo-circulo.c3
              .cuerpo-bloque-codigo.p-4
                code.text-wrap
                span.fs-i GESTION-EMPLEADOS
                br
                span.fs-i ├── backend
                br
                span.fs-i ├── frontend
                br
                span.fs-i │   ├── node_modules
                br
                span.fs-i │   ├── src
                br
                span.fs-i │   ├── .browserslistrc
                br
                span.fs-i │   ├── .editorconfig
                br
                span.fs-i │   ├── .gitignore
                br
                span.fs-i │   ├── angular.json
                br
                span.fs-i │   ├── karma.conf.js
                br
                span.fs-i │   ├── package-lock.json
                br
                span.fs-i │   ├── package.json
                br
                span.fs-i │   ├── README.md
                br
                span.fs-i │   ├── tsconfig.app.json
                br
                span.fs-i │   ├── tsconfig.json
                br
                span.fs-i │   ├── tsconfig.spec.json

        .row.mb-5.pt-3.pb-3
          .col-lg-7.mb-4.mb-lg-0
            p.mb-0 A continuación, se debe ingresar a la carpeta del #[em front-end] e iniciar el servidor digitando en la terminal del VS Code la siguiente línea de comandos: ng serve. Es importante recordar que para ingresar por la terminal a la carpeta de #[em front-end] se hace con el comando cd, es decir, cd Frontend/. Una vez dentro de la carpeta #[em front-end] se ejecuta el comando ng serve, lo que inicia un servidor de desarrollo para Angular. En ese sentido, el servidor se inicializa en el puerto 4200 (#[a.link-personalizado-1(target='_blank',href='http://localhost:4200/') http://localhost:4200/]), como se representa en la siguiente figura:
          .col-lg-5
            figure
              img.mx-auto(src="@/assets/curso/temas/29.png",style="max-width: 502px;")

    .row.justify-content-center.mb-2
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-5
          p.mb-0 #[b Figura 7.] Estado servidor #[em Front-end]
        figure
          img.mx-auto(src="@/assets/curso/temas/31.svg",style="max-width: 820px;",alt="Interfaz inicial de una aplicación Angular en un navegador web con un mensaje de bienvenida.")
    
    Separador

    #t_2_2.titulo-segundo.color-acento-contenido.mt-2
      h2 2.2 Generación de código con ng
    
    .row 
      .col-lg-7
        p.mb-4 Después de iniciar el servidor Angular, se revisa la estructura de directorios de este #[em framework]. Aunque hay muchos archivos, es necesario concentrarse en la carpeta ubicada en la ruta frontend/src/app. En la carpeta #[em app] se realizará todo el código necesario para el proyecto.
        p.mb-0 Adicionalmente, para dar coherencia al proyecto, dentro de la carpeta app se crean tres carpetas más: #[em models, services y components], para tener bien definido el proyecto.
      .col-lg-5.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/32.png",style="max-width: 502px;")
    
    .fondo-personalizado-1.f6.mb-4
      .fondo-personalizado-1__contenido.pb-4.pt-5
        .row.justify-content-center.pt-2
          .col-lg-8
            .bloque-codigo-personalizado(data-aos="flip-up")
              .cabecera-bloque-codigo.p-4.py-3
                .bloque-codigo-circulos 
                  .bloque-codigo-circulo.c1
                  .bloque-codigo-circulo.c2
                  .bloque-codigo-circulo.c3
              .cuerpo-bloque-codigo.p-4
                code.text-wrap
                span.fs-i GESTION-EMPLEADOS
                br
                span.fs-i ├── backend
                br
                span.fs-i ├── frontend
                br
                span.fs-i │   ├── node_modules
                br
                span.fs-i │   ├── src
                br
                span.fs-i │   │   ├── app
                br
                span.fs-i │   │   │   ├── components
                br
                span.fs-i │   │   │   ├── models
                br
                span.fs-i │   │   │   ├── services
                br
                span.fs-i │   │   │   ├── app-routing.module.ts
                br
                span.fs-i │   │   │   ├── app.component.css
                br
                span.fs-i │   │   │   ├── app.component.html
                br
                span.fs-i │   │   │   ├── app.component.spec.ts
                br
                span.fs-i │   │   │   ├── app.component.ts
                br
                span.fs-i │   │   │   ├── app.module.ts
                br
                br

    .row
      .col-auto.d-none.d-md-block 
        figure
          img.mx-auto(src="@/assets/curso/temas/34.svg",style="max-width: 85px;")
      .col 
        p.mb-0 Haciendo uso de una de las características del #[em framework], se genera el código ingresando a las carpetas que se acaban de crear y en cada una se ejecutan las siguientes líneas de código respectivamente:
    
    .fondo-personalizado-1.f7.mb-4
      .fondo-personalizado-1__contenido.pt-5.pb-2
        .row.justify-content-center 
          .col-lg-4.col-md-6.mb-4
            .fondo-color-primario.p-4.p-md-5.borde-16.h-100
              figure.mb-4
                img.mx-auto(src="@/assets/curso/temas/35.svg",style="max-width: 123px;")
              h4.mb-4.c-color-acento-contenido.text-center Generar componente empleados
              p.mb-0.text-white.mb-5 Dentro de la carpeta components se genera un componente llamado empleados con Angular CLI: #[b ng g c empleados]. 
          .col-lg-4.col-md-6.mb-4
            .fondo-color-primario.p-4.p-md-5.borde-16.h-100
              figure.mb-4
                img.mx-auto(src="@/assets/curso/temas/36.svg",style="max-width: 123px;")
              h4.mb-4.c-color-acento-contenido.text-center Crear clase empleado
              p.mb-0.text-white.mb-5 Dentro de la carpeta models se crea la clase empleado con: #[b ng g class empleado].
          .col-lg-4.col-md-6.mb-4
            .fondo-color-primario.p-4.p-md-5.borde-16.h-100
              figure.mb-4
                img.mx-auto(src="@/assets/curso/temas/37.svg",style="max-width: 123px;")
              h4.mb-4.c-color-acento-contenido.text-center Crear servicio empleado
              p.mb-0.text-white.mb-5 Dentro de la carpeta services se crea un servicio llamado empleado con la siguiente línea: #[b ng g s empleado].
    
    .row.mb-4
      .col-auto.d-none.d-md-block 
        figure
          img.mx-auto(src="@/assets/curso/temas/7.svg",style="max-width: 85px;")
      .col 
        p.mb-0 Para mayor precisión con relación a las instrucciones ejecutadas, a continuación se presenta la evidencia de las operaciones realizadas:

    .fondo-personalizado-1.f4.mb-1
      .fondo-personalizado-1__contenido.pb-4.pt-5
        .row.justify-content-center
          .col-lg-8
            .bloque-codigo-personalizado(data-aos="flip-up")
              .cabecera-bloque-codigo.p-4.py-3
                .bloque-codigo-circulos 
                  .bloque-codigo-circulo.c1
                  .bloque-codigo-circulo.c2
                  .bloque-codigo-circulo.c3
              .cuerpo-bloque-codigo.p-4
                code.text-wrap
                span.fs-i PS D:\gestion-empleados\frontend> cd .\src\app\components\
                br
                span.fs-i PS D:\gestion-empleados\frontend\src\app\components> ng g c empleados
                br
                span.fs-i CREATE src/app/components/empleados/empleados.component.html (24 bytes)
                br
                span.fs-i CREATE src/app/components/empleados/empleados.component.spec.ts (647 bytes)
                br
                span.fs-i CREATE src/app/components/empleados/empleados.component.ts (287 bytes)
                br
                span.fs-i CREATE src/app/components/empleados/empleados.component.css (0 bytes)
                br
                span.fs-i UPDATE src/app/app.module.ts (498 bytes)
                br
                span.fs-i empleados.component.css
                br
                span.fs-i empleados.component.html
                br
                span.fs-i empleados.component.spec.ts
                br
                span.fs-i empleados.component.ts
                br
                br
    
    Separador

    .fondo-personalizado-1.f8.mb-4
      .fondo-personalizado-1__contenido.pt-5.pb-4

        #t_2_3.titulo-segundo.color-acento-contenido
          h2 2.3 Incorporación de #[em Materialize] al proyecto web
        .row.mb-5
          .col-auto.d-none.d-md-block 
            figure
              img.mx-auto(src="@/assets/curso/temas/34.svg",style="max-width: 85px;")
          .col 
            p.mb-0 Se incorpora #[em Materialize] al proyecto mediante la inclusión de los #[em CDN] (red de distribución de contenidos) de hojas de estilos, JavaScript e íconos en el documento #[em index.html] del #[em Front-end], por lo que la ruta al archivo es #[b FrontEnd/src/index.html]
        
        .row.justify-content-center.mb-4
          .col-lg-8
            .bloque-codigo-personalizado(data-aos="flip-up")
              .cabecera-bloque-codigo.p-4.py-3
                .bloque-codigo-circulos 
                  .bloque-codigo-circulo.c1
                  .bloque-codigo-circulo.c2
                  .bloque-codigo-circulo.c3
              .cuerpo-bloque-codigo.p-4
                code.text-wrap
                  span.fs-i html
                  br
                  span.fs-i &lt;!doctype html&gt;
                  br
                  span.fs-i &lt;html lang="en"&gt;
                  br
                  span.fs-i &lt;head&gt;
                  br
                  span.fs-i   &nbsp;&nbsp;  &lt;meta charset="utf-8"&gt;
                  br
                  span.fs-i   &nbsp;&nbsp;  &lt;title&gt;FrontEnd&lt;/title&gt;
                  br
                  span.fs-i   &nbsp;&nbsp;  &lt;base href="/"&gt;
                  br
                  span.fs-i   &nbsp;&nbsp;  &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
                  br
                  span.fs-i   &nbsp;&nbsp;  &lt;link rel="icon" type="image/x-icon" href="favicon.ico"&gt;
                  br
                  span.fs-i   &nbsp;&nbsp;  &lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"&gt;
                  br
                  span.fs-i   &nbsp;&nbsp;  &lt;link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"&gt;
                  br
                  span.fs-i &lt;/head&gt;
                  br
                  span.fs-i &lt;body&gt;
                  br
                  span.fs-i   &nbsp;&nbsp;  &lt;app-root&gt;&lt;/app-root&gt;
                  br
                  span.fs-i   &nbsp;&nbsp;  &lt;script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"&gt;&lt;/script&gt;
                  br
                  span.fs-i &lt;/body&gt;
                  br
                  span.fs-i &lt;/html&gt;

        Separador

        #t_2_4.titulo-segundo.color-acento-contenido.mt-3
          h2 2.4 Configuración de app.component.html
        
        .row.mb-5
          .col-auto.d-none.d-md-block 
            figure
              img.mx-auto(src="@/assets/curso/temas/34.svg",style="max-width: 85px;")
          .col 
            p.mb-0 Ahora se inicia con la modificación del archivo #[b app.component.html], dado que en este archivo se llaman los componentes de la aplicación que, para el caso de estudio propuesto, se denomina empleados.
        
        .row.justify-content-center
          .col-lg-8
            .bloque-codigo-personalizado(data-aos="flip-up")
              .cabecera-bloque-codigo.p-4.py-3
                .bloque-codigo-circulos 
                  .bloque-codigo-circulo.c1
                  .bloque-codigo-circulo.c2
                  .bloque-codigo-circulo.c3
              .cuerpo-bloque-codigo.p-4
                code.text-wrap
                span.fs-i html
                br
                span.fs-i &lt;nav class="nav-wrapper blue"&gt;
                br
                span.fs-i  &nbsp;&nbsp;   &lt;div class="container"&gt;
                br
                span.fs-i  &nbsp;&nbsp;&nbsp;&nbsp;       &lt;a href="/" class="brand-logo"&gt;GESTIÓN DE EMPLEADOS&lt;/a&gt;
                br
                span.fs-i  &nbsp;&nbsp;   &lt;/div&gt;
                br
                span.fs-i &lt;/nav&gt;
                br
                br
                span.fs-i &lt;div class="container p-4"&gt;
                br
                span.fs-i  &nbsp;&nbsp;   &lt;app-empleados&gt;&lt;/app-empleados&gt;
                br
                span.fs-i &lt;/div&gt;
    
    .row.mb-3
      .col-auto.d-none.d-md-block 
        figure
          img.mx-auto(src="@/assets/curso/temas/7.svg",style="max-width: 85px;")
      .col 
        p.mb-0 El código se evidencia que se adiciona la etiqueta #[b &lt;app-empleados&gt;], indicando que se hará uso de ese componente.
    
    Separador

    #t_2_5.titulo-segundo.color-acento-contenido
      h2 2.5 Configuración de los módulos #[em app.module.ts]
    
    .row.align-items-center.mb-5 
      .col-lg-7
        p.mb-3 A continuación, se configura uno de los archivos más importantes del proyecto, el cual se encarga de cargar los módulos de la aplicación. Es necesario entender la naturaleza de la aplicación que se está desarrollando, ya que esto permitirá definir qué módulos son necesarios para el óptimo funcionamiento de la aplicación.
        .fondo-color-sistema-m.p-4.px-lg-5.borde-16
          p.mb-0 En este caso de estudio, la aplicación permitirá la adición de empleados utilizando un API REST, por lo que es evidente el uso de un formulario en la interfaz, además de la comunicación que debe tener el #[em front-end] con el servidor.
      .col-lg-5.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/40.png",style="max-width: 502px;")
    
    .fondo-personalizado-1.f9.pt-3.mb-1
      .fondo-personalizado-1__contenido.pb-5
        .row.justify-content-center
          .col-lg-8
            .bloque-codigo-personalizado(data-aos="flip-up")
              .cabecera-bloque-codigo.p-4.py-3
                .bloque-codigo-circulos 
                  .bloque-codigo-circulo.c1
                  .bloque-codigo-circulo.c2
                  .bloque-codigo-circulo.c3
              .cuerpo-bloque-codigo.p-4
                code.text-wrap
                span.fs-i typescript
                br
                span.fs-i import { NgModule } from '@angular/core';
                br
                span.fs-i import { BrowserModule } from '@angular/platform-browser';
                br
                span.fs-i import { FormsModule } from '@angular/forms';
                br
                span.fs-i import { HttpClientModule } from '@angular/common/http';
                br
                br
                span.fs-i import { AppRoutingModule } from './app-routing.module';
                br
                span.fs-i import { AppComponent } from './app.component';
                br
                span.fs-i import { EmpleadosComponent } from './components/empleados/empleados.component';
                br
                br
                span.fs-i @NgModule({
                br
                span.fs-i  &nbsp;&nbsp;   declarations: [
                br
                span.fs-i    &nbsp;&nbsp;&nbsp;&nbsp;     AppComponent,
                br
                span.fs-i    &nbsp;&nbsp;&nbsp;&nbsp;     EmpleadosComponent
                br
                span.fs-i  &nbsp;&nbsp;   ],
                br
                span.fs-i  &nbsp;&nbsp;   imports: [
                br
                span.fs-i    &nbsp;&nbsp;&nbsp;&nbsp;     BrowserModule,
                br
                span.fs-i    &nbsp;&nbsp;&nbsp;&nbsp;     FormsModule,
                br
                span.fs-i    &nbsp;&nbsp;&nbsp;&nbsp;     AppRoutingModule,
                br
                span.fs-i    &nbsp;&nbsp;&nbsp;&nbsp;     HttpClientModule
                br
                span.fs-i   &nbsp;&nbsp;  ],
                br
                span.fs-i   &nbsp;&nbsp;  providers: [],
                br
                span.fs-i   &nbsp;&nbsp;  bootstrap: [AppComponent]
                br
                span.fs-i })
                br
                span.fs-i export class AppModule { }
    
    Separador

    #t_2_6.titulo-segundo.color-acento-contenido
      h2 2.6 Configuración del modelo #[em empleado.ts]
    
    .row.align-items-center.mper-1.mb-5
      .col-lg-9
        p.mb-4 Una vez realizada la configuración en los módulos de la aplicación, se inicia la construcción del modelo de la aplicación. La codificación se realiza dentro del archivo #[em empleado.ts], cuya ruta es #[em models/empleado.ts].
        p.mb-0 Dentro de este archivo se define la estructura de datos que está asociada a lo que se describió en el #[em back-end].
      .col-lg-3.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/42.svg",style="max-width: 292px;")
    
    .fondo-personalizado-1.f6.mb-5
      .fondo-personalizado-1__contenido.pt-5.pb-4
        .row.justify-content-center
          .col-lg-8
            .bloque-codigo-personalizado(data-aos="flip-up")
              .cabecera-bloque-codigo.p-4.py-3
                .bloque-codigo-circulos 
                  .bloque-codigo-circulo.c1
                  .bloque-codigo-circulo.c2
                  .bloque-codigo-circulo.c3
              .cuerpo-bloque-codigo.p-4
                code.text-wrap
                span.fs-i typescript
                br
                span.fs-i export class Empleado {
                br
                span.fs-i  &nbsp;&nbsp;&nbsp;   constructor(_id = "", name = "", position = "", office = "", salary = 0) {
                br
                span.fs-i    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     this._id = _id;
                br
                span.fs-i    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     this.name = name;
                br
                span.fs-i    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     this.position = position;
                br
                span.fs-i    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     this.office = office;
                br
                span.fs-i    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     this.salary = salary;
                br
                span.fs-i  &nbsp;&nbsp;&nbsp;   }
                br
                br
                span.fs-i  &nbsp;&nbsp;&nbsp;   _id: string; // Sub guión id porque los datos van a venir de MongoDB
                br
                span.fs-i  &nbsp;&nbsp;&nbsp;   name: string;
                br
                span.fs-i  &nbsp;&nbsp;&nbsp;   position: string;
                br
                span.fs-i  &nbsp;&nbsp;&nbsp;   office: string;
                br
                span.fs-i  &nbsp;&nbsp;&nbsp;   salary: number;
                br
                span.fs-i }
                br
                br
    
    p.mb-4 En el código anterior, se definen los parámetros que serán utilizados para el envío de datos hacia el servidor; por lo tanto, se comienza con la inicialización de las variables a través de un constructor y con la declaración del tipo de datos de cada una.

    Separador

    #t_2_7.titulo-segundo.color-acento-contenido
      h2 2.7 Creación del servicio empleado.service.ts
    
    .row.mb-4 
      .col-lg-7
        p.mb-4 El objetivo general de esta parte del proyecto es agregar los datos ya definidos a la REST API. Para ello, se enfoca en generar el servicio necesario, desarrollando el archivo #[em empleado.service.ts]. Este servicio permite definir los métodos reutilizables en cualquier parte de la aplicación. En este caso, se trata de funciones que gestionan los datos, como agregar, eliminar, y editar, entre otros.
        p.mb-0 A continuación, se presenta el código del archivo #[em empleado.service.ts].
      .col-lg-5.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/43.png",style="max-width: 502px;")
    
    .fondo-personalizado-1.f10.mb-4
      .fondo-personalizado-1__contenido.py-5
        .row.justify-content-center
          .col-lg-8
            .bloque-codigo-personalizado(data-aos="flip-up")
              .cabecera-bloque-codigo.p-4.py-3
                .bloque-codigo-circulos 
                  .bloque-codigo-circulo.c1
                  .bloque-codigo-circulo.c2
                  .bloque-codigo-circulo.c3
              .cuerpo-bloque-codigo.p-4
                code.text-wrap
                span.fs-i typescript
                br
                span.fs-i import { Injectable } from '@angular/core';
                br
                span.fs-i import { HttpClient } from '@angular/common/http';
                br
                span.fs-i import { Empleado } from '../models/empleado';
                br
                br
                span.fs-i @Injectable({
                br
                span.fs-i &nbsp;&nbsp;  providedIn: 'root'
                br
                span.fs-i })
                br
                span.fs-i export class EmpleadoService {
                br
                br
                span.fs-i &nbsp;&nbsp;  selectedEmpleado: Empleado;
                br
                span.fs-i &nbsp;&nbsp;  empleados: Empleado[];
                br
                span.fs-i &nbsp;&nbsp;  readonly URL_API = 'http://localhost:3000/api/empleados';
                br
                br
                span.fs-i &nbsp;&nbsp;  constructor(private http: HttpClient) {
                br
                span.fs-i  &nbsp;&nbsp;&nbsp;&nbsp;   this.selectedEmpleado = new Empleado();
                br
                span.fs-i  &nbsp;&nbsp;&nbsp;&nbsp;   this.empleados = [];
                br
                span.fs-i &nbsp;&nbsp;  }
                br
                br
                span.fs-i &nbsp;&nbsp;  getEmpleados() {
                br
                span.fs-i  &nbsp;&nbsp;&nbsp;&nbsp;   return this.http.get(this.URL_API);
                br
                span.fs-i &nbsp;&nbsp;  }
                br
                br
                span.fs-i &nbsp;&nbsp;  postEmpleado(Empleado: Empleado) {
                br
                span.fs-i  &nbsp;&nbsp;&nbsp;&nbsp;   return this.http.post(this.URL_API, Empleado);
                br
                span.fs-i &nbsp;&nbsp;  }
                br
                br
                span.fs-i &nbsp;&nbsp;  putEmpleado(Empleado: Empleado) {
                br
                span.fs-i  &nbsp;&nbsp;&nbsp;&nbsp;   return this.http.put(this.URL_API + `/${Empleado._id}`, Empleado);
                br
                span.fs-i &nbsp;&nbsp;  }
                br
                br
                span.fs-i &nbsp;&nbsp;  deleteEmpleado(_id: string) {
                br
                span.fs-i  &nbsp;&nbsp;&nbsp;&nbsp;   // Solo se necesita el id, no todo lo del empleado
                br
                span.fs-i  &nbsp;&nbsp;&nbsp;&nbsp;   return this.http.delete(this.URL_API + `/${_id}`); // utilizamos el método delete
                br
                span.fs-i &nbsp;&nbsp;  }
                br
                br
                span.fs-i }
    
    p.mb-4 En el código anterior se resalta la importancia de haber definido primeramente el módulo #[em empleado.ts], ya que esto establece una estructura clara de datos. Por esta razón, se importa el modelo y se asegura la comunicación con el servidor a través de la modificación del archivo #[em app.modules.ts] con la incorporación del módulo #[em HTTPClient].

    .fondo-personalizado-1.pos-full.f5.mb-2
      .fondo-personalizado-1__contenido.pb-5.pt-5
        .row.justify-content-center.mb-5.pb-5
          .col-lg-10
            .borde-16.overflow-hidden
              .row
                .col-lg-3.pe-lg-0
                  .fondo-color-sistema-n.p-3.h-100.d-flex.align-items-center
                    figure
                      img.mx-auto(src="@/assets/curso/temas/45.svg",style="max-width: 112px;")
                .col-lg-9.ps-lg-0
                  .fondo-color-primario.p-3.h-100
                    .d-flex.align-items-center.h-100
                      p.text-white.mb-0(style="font-size: 13px;") Además, se establece como atributo de solo lectura la URL de la API a la cual se conectará el cliente, en este caso, la URL del servidor ya configurada en la primera sección de este componente es #[a.link-personalizado-1.c-color-acento-contenido(style="font-style: italic;",target='_blank',href='http://localhost:3000/empleados') http://localhost:3000/empleados].
        
        .row.align-items-center.pb-5
          .col-lg-7
            p.mb-0 A continuación, se procede con la definición de los métodos para la gestión de los datos de empleado, generando así cuatro métodos: #[ getEmpleados, postEmpleados, putEmpleado y deleteEmpleado]. Para el caso de estudio, se analiza el método #[em postEmpleado], que recibe como parámetro un objeto de tipo #[em Empleado]. El retorno es la adición de un nuevo empleado (se envían todos los datos) a través del método HTTP POST:
          .col-lg-5
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/46.png",style="max-width: 502px;")

    .row.justify-content-center
      .col-lg-6
        .fondo-color-sistema-m.borde-16.p-4.mb-5
          p.mb-0.fw-bold.text-center return this.http.post(this.URL_API, Empleado);
    
    p.mb-2 Es fundamental asegurarse de que en cada método se envíe la URL del servidor y los datos necesarios en relación con el método correspondiente.

    Separador

    #t_2_8.titulo-segundo.color-acento-contenido
      h2 2.8 Desarrollo del componente #[em empleados.component.ts]
    
    p.mb-5 Definidos los servicios, es necesario abordar la lógica del componente. A continuación, se enfoca en el archivo #[em empleados.component.ts]. El código del archivo se presenta a continuación:

    .fondo-personalizado-1.f10.mb-5
      .fondo-personalizado-1__contenido.pt-3.pb-5
        .row.justify-content-center
          .col-lg-8
            .bloque-codigo-personalizado(data-aos="flip-up")
              .cabecera-bloque-codigo.p-4.py-3
                .bloque-codigo-circulos 
                  .bloque-codigo-circulo.c1
                  .bloque-codigo-circulo.c2
                  .bloque-codigo-circulo.c3
              .cuerpo-bloque-codigo.p-4
                code.text-wrap
                span.fs-i import { Component, OnInit } from '@angular/core';
                br
                span.fs-i import { EmpleadoService } from '../services/empleado.service';
                br
                span.fs-i import { NgForm } from '@angular/forms';
                br
                span.fs-i import { Empleado } from '../models/empleado';
                br
                br
                span.fs-i declare var M: any;
                br
                br
                span.fs-i @Component({
                br
                span.fs-i &nbsp;&nbsp;  selector: 'app-empleados',
                br
                span.fs-i &nbsp;&nbsp;  templateUrl: './empleados.component.html',
                br
                span.fs-i &nbsp;&nbsp;  styleUrls: ['./empleados.component.css'],
                br
                span.fs-i &nbsp;&nbsp;  providers: [EmpleadoService]
                br
                span.fs-i })
                br
                span.fs-i export class EmpleadosComponent implements OnInit {
                br
                br
                span.fs-i &nbsp;&nbsp;  constructor(public empleadoService: EmpleadoService) { }
                br
                br
                span.fs-i &nbsp;&nbsp;  ngOnInit(): void {
                br
                span.fs-i &nbsp;&nbsp;  }
                br
                br
                span.fs-i &nbsp;&nbsp;  agregarEmpleado(form?: NgForm) {
                br
                span.fs-i  &nbsp;&nbsp;&nbsp;&nbsp;   this.empleadoService.postEmpleado(form?.value)
                br
                span.fs-i   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    .subscribe(res => {
                br
                span.fs-i   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      this.resetForm(form);
                br
                span.fs-i   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      M.toast({ html: 'Guardado satisfactoriamente' });
                br
                span.fs-i  &nbsp;&nbsp;&nbsp;&nbsp;     });
                br
                span.fs-i &nbsp;&nbsp;  }
                br
                br
                span.fs-i &nbsp;&nbsp;  resetForm(form?: NgForm) {
                br
                span.fs-i  &nbsp;&nbsp;&nbsp;&nbsp;   // Limpiar el formulario, recibe un formulario como parámetro
                br
                span.fs-i  &nbsp;&nbsp;&nbsp;&nbsp;   if (form) {
                br
                span.fs-i   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    form.reset();
                br
                span.fs-i   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    this.empleadoService.selectedEmpleado = new Empleado();
                br
                span.fs-i  &nbsp;&nbsp;&nbsp;&nbsp;   }
                br
                span.fs-i  &nbsp;&nbsp; }
                br
                span.fs-i }
    
    .row.mb-3 
      .col-md-auto 
        figure.mb-4.mb-md-0
          img.mx-auto(src="@/assets/curso/temas/47.svg",style="max-width: 86px;")
      .col 
        p.mb-0 En el código anterior se destaca la importancia de haber creado y configurado previamente los módulos y archivos para la construcción de este componente. Para su funcionamiento adecuado, es necesario contar con #[em EmpleadoService], el modelo #[em Empleado] y el módulo ya definido como #[em NgForm].
    
    .row.align-items-center.mb-5 
      .col-lg-8
        .fondo-color-primario.p-4.borde-10.mb-4
          p.mb-0.text-white Una vez se importan estos módulos, se enfocan los esfuerzos en los métodos. Para el caso de estudio, se destaca el método de agregar empleado. Este método toma como parámetro la existencia de datos del formulario y, si es verdadero, llama al método del servicio empleado (previamente construido) #[em PostEmpleado], entregando los valores para que sean enviados al servidor y almacenados en la base de datos de MongoDB.
        .fondo-color-sistema-i.p-4.borde-10
          p.mb-0 Además, como ejemplo de este componente, se añade un plus: en cada adición de datos en el formulario, este se puede limpiar automáticamente mediante la función #[em resetForm], que resetea o limpia los campos del formulario utilizando la función intrínseca #[em reset()].
      .col-lg-4.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/48.png",style="max-width: 397px;")
    
    .row.mb-4
      .col-auto.d-none.d-md-block 
        figure
          img.mx-auto(src="@/assets/curso/temas/34.svg",style="max-width: 85px;")
      .col 
        p.mb-0 Finalmente, para mejorar la interfaz, se agrega un complemento de #[em Materialize] llamado #[em Toast], que no es más que una notificación que se utiliza para indicar al usuario que el empleado se ha guardado correctamente.

    Separador

    #t_2_9.titulo-segundo.color-acento-contenido
      h2 2.9 Desarrollo de la interfaz HTML empleados.component.html
    
    .fondo-personalizado-1.f8.mb-4
      .fondo-personalizado-1__contenido.pb-5
        .row.justify-content-center.mb-5
          .col-lg-10
            .fondo-personalizado-3.p-4.borde-11
              .row.align-items-center
                .col-md-auto
                  .d-flex.mb-4.mb-md-0.justify-content-center
                    .burbuja-1.fondo-color-acento-contenido.p-3
                      figure
                        img.mx-auto(src="@/assets/curso/temas/49.svg",style="max-width: 57px;")
                .col 
                  p.mb-0.text-white Después de definir la lógica del componente empleado, lo único que falta es la construcción del formulario. Por lo tanto, se enfoca ahora en el desarrollo del archivo #[span.fw-bold(style="color: #00FFDF !important;") empleados.component.html], que se presenta a continuación:

        .row.justify-content-center.pb-5
          .col-lg-8
            .bloque-codigo-personalizado.pb-5(data-aos="flip-up")
              .cabecera-bloque-codigo.p-4.py-3
                .bloque-codigo-circulos 
                  .bloque-codigo-circulo.c1
                  .bloque-codigo-circulo.c2
                  .bloque-codigo-circulo.c3
              .cuerpo-bloque-codigo.p-4
                code.text-wrap
                  span.fs-i &lt;div class="container"&gt;
                  br
                  span.fs-i &nbsp;&nbsp;  &lt;div class="row"&gt;
                  br
                  span.fs-i  &nbsp;&nbsp;&nbsp;&nbsp;   &lt;div class="col s5"&gt;
                  br
                  span.fs-i  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     &lt;div class="card"&gt;
                  br
                  span.fs-i  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;       &lt;div class="card-content"&gt;
                  br
                  span.fs-i  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;         &lt;form #empleadoForm="ngForm" (ngSubmit)="agregarEmpleado(empleadoForm)"&gt;
                  br
                  span.fs-i  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;           &lt;div class="row"&gt;
                  br
                  span.fs-i  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;             &lt;div class="input-field col s12"&gt;
                  br
                  span.fs-i  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;               &lt;input type="text" name="name" #name="ngModel" [(ngModel)]="empleadoService.selectedEmpleado.name" placeholder="Ingrese su nombre"&gt;
                  br
                  span.fs-i  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;             &lt;/div&gt;
                  br
                  span.fs-i  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;             &lt;div class="input-field col s12"&gt;
                  br
                  span.fs-i  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;               &lt;input type="text" name="position" #position="ngModel" [(ngModel)]="empleadoService.selectedEmpleado.position" placeholder="Ingrese su cargo"&gt;
                  br
                  span.fs-i  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;             &lt;/div&gt;
                  br
                  span.fs-i  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;             &lt;div class="input-field col s12"&gt;
                  br
                  span.fs-i  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;               &lt;input type="text" name="office" #office="ngModel" [(ngModel)]="empleadoService.selectedEmpleado.office" placeholder="Ingrese su lugar de trabajo"&gt;
                  br
                  span.fs-i  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;             &lt;/div&gt;
                  br
                  span.fs-i  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;             &lt;div class="input-field col s12"&gt;
                  br
                  span.fs-i  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;               &lt;input type="text" name="salary" #salary="ngModel" [(ngModel)]="empleadoService.selectedEmpleado.salary" placeholder="Ingrese su salario"&gt;
                  br
                  span.fs-i  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;             &lt;/div&gt;
                  br
                  span.fs-i  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;             &lt;div class="card-action"&gt;
                  br
                  span.fs-i  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;               &lt;div class="input-field col s12"&gt;
                  br
                  span.fs-i  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                 &lt;button class="btn right" (click)="resetForm(empleadoForm)"&gt;Limpiar&lt;/button&gt;
                  br
                  span.fs-i  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                 &lt;button class="btn"&gt;Guardar&lt;/button&gt;
                  br
                  span.fs-i  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;               &lt;/div&gt;
                  br
                  span.fs-i  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;             &lt;/div&gt;
                  br
                  span.fs-i  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;           &lt;/div&gt;
                  br
                  span.fs-i  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;         &lt;/form&gt;
                  br
                  span.fs-i  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;       &lt;/div&gt;
                  br
                  span.fs-i  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     &lt;/div&gt;
                  br
                  span.fs-i  &nbsp;&nbsp;&nbsp;&nbsp;   &lt;/div&gt;
                  br
                  span.fs-i  &nbsp;&nbsp;&nbsp;&nbsp;   &lt;div class="col s7"&gt;
                  br
                  span.fs-i  &nbsp;&nbsp;&nbsp;&nbsp;   &lt;/div&gt;
                  br
                  span.fs-i &nbsp;&nbsp;  &lt;/div&gt;
                  br
                  span.fs-i &lt;/div&gt;

    .row.align-items-center.mb-5
      .col-lg-7
        p.mb-3 En el código anterior se presenta la estructura base de un formulario en HTML, el cual se adhiere a clases y reglas provistas por #[em Materialize] para mejorar la apariencia de la interfaz. Además, se muestran cuatro #[em inputs] en los cuales el usuario debe ingresar datos, y al final se presentan dos botones: uno para enviar el formulario y otro para limpiarlo. A continuación, se destaca una línea de código específica:
        .fondo-color-sistema-m.p-4.borde-16.mb-5
          p.mb-0.fw-bold &lt;form #empleadoForm="ngForm" (ngSubmit)="agregarEmpleado(empleadoForm)"&gt;
        
        p.mb-0 Esta línea define que todos los campos del formulario serán almacenados en una sola variable (#[em empleadoForm]), y estos campos serán procesados por el método #[em agregarEmpleado], método que #[b fue definido anteriormente en el componente de empleado].
      .col-lg-5.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/50.png",style="max-width: 502px;")
    
    Separador

    #t_2_10.titulo-segundo.color-acento-contenido
      h2 2.10 Probando la aplicación completa.
    
    .row.align-items-center.mb-5
      .col-lg-6
        .fondo-color-sistema-o.p-4.p-lg-5
          p.mb-0.pb-lg-2 Proyecto web terminado Finalizada la codificación de cada uno de los archivos del #[em front-end], es necesario revisar cómo ha quedado la aplicación. Sin embargo, este paso no se realiza solo al final, sino que, debido a la concisión de este componente, se presenta en esta instancia. Como buena práctica, en cada bloque de desarrollo o línea se debe revisar el resultado obtenido, es decir, trabajar de manera paralela. Una muestra de la interfaz de la aplicación se ilustra en la siguiente figura:
      .col-lg-6.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/51.png",style="max-width: 606px;")
    
    .fondo-personalizado-1.f11.mb-5
      .fondo-personalizado-1__contenido.pb-5
        .row.justify-content-center.pt-1.mb-5
          .col-lg-6
            .fondo-color-sistema-p.p-4.p-md-5.borde-27
              .px-md-4
                .titulo-sexto.color-acento-contenido
                  p.mb-0 #[b Figura 8.] Registro empleados
                .fondo-color-sistema-q.p-4.px-3.px-md-5.borde-13
                  figure
                  img.mx-auto(src="@/assets/curso/temas/52.svg",style="max-width: 297px;",alt="Formulario de entrada de datos para empleados, con campos para nombre, cargo, lugar de trabajo y salario, y botones para guardar y limpiar.")
        
        .row.justify-content-center.mb-5
          .col-lg-8
            .fondo-color-primario.p-4.borde-26.py-5
              .row.align-items-center
                .col-md-auto
                  .d-flex.mb-4.mb-md-0.justify-content-center
                    .burbuja-1.fondo-color-acento-contenido.p-3
                      figure
                        img.mx-auto(src="@/assets/curso/temas/53.svg",style="max-width: 80px;")
                .col 
                  p.mb-0.text-white En la muestra anterior de la interfaz se ilustra un formulario en el cual se solicitan los datos al usuario para el registro de un empleado. Es importante notar el uso de los #[em placeholders] en cada caja de texto, cuya función es guiar o indicar qué tipo de datos se deben registrar. De esta manera, la interfaz quedaría como se muestra en la siguiente figura:

        .row.justify-content-center.pt-1.mb-5
          .col-lg-6
            .fondo-color-sistema-p.p-4.p-md-5.borde-27
              .px-md-4
                .titulo-sexto.color-acento-contenido
                  p.mb-0 #[b Figura 9.] Registro empleado
                .fondo-color-sistema-q.p-4.px-3.px-md-5.borde-13
                  figure
                  img.mx-auto(src="@/assets/curso/temas/54.svg",style="max-width: 295px;",alt="Formulario de entrada de datos para empleados rellenado con ejemplo de datos.")
        
        .row.mb-5
          .col-auto.d-none.d-md-block 
            figure
              img.mx-auto(src="@/assets/curso/temas/34.svg",style="max-width: 85px;")
          .col 
            p.mb-0 Al momento de dar clic en guardar, se almacena la información y se muestra la notificación de #[em Materialize Toast], indicando que el usuario se ha guardado exitosamente. Además, se limpia el formulario mediante la función #[em reset()], tal como se aprecia en la figura.
        
        .row.justify-content-center
          .col-lg-8
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 10.] Notificación #[em Toast] de #[em Materialize]
            figure
              img.mx-auto(src="@/assets/curso/temas/55.svg",style="max-width: 820px;",alt="Interfaz de la aplicación web para la gestión de empleados, mostrando el formulario de entrada de datos y un mensaje de confirmación de guardado satisfactorio.")
    
    .row
      .col-auto.d-none.d-md-block 
        figure
          img.mx-auto(src="@/assets/curso/temas/34.svg",style="max-width: 85px;")
      .col 
        p.mb-0 Para verificar que los datos incorporados en el formulario se hayan almacenado correctamente en la base de datos empleado de MongoDB, se utilizará el panel de control de MongoDB, como se aprecia en los siguientes códigos:
    
    .fondo-personalizado-1.f12
      .fondo-personalizado-1__contenido.py-5
        .row.justify-content-center.mb-5
          .col-lg-8
            .bloque-codigo-personalizado(data-aos="flip-up")
              .cabecera-bloque-codigo.p-4.py-3
                .bloque-codigo-circulos 
                  .bloque-codigo-circulo.c1
                  .bloque-codigo-circulo.c2
                  .bloque-codigo-circulo.c3
              .cuerpo-bloque-codigo.p-4
                code.text-wrap
                  span.fs-i json
                  br
                  span.fs-i {
                  br
                  span.fs-i  &nbsp;&nbsp; "_id": ObjectId("60d2aeaa21a176987f0157485"),
                  br
                  span.fs-i  &nbsp;&nbsp; "name": "Julian",
                  br
                  span.fs-i  &nbsp;&nbsp; "position": "Ingeniero",
                  br
                  span.fs-i  &nbsp;&nbsp; "office": "Cali",
                  br
                  span.fs-i  &nbsp;&nbsp; "salary": 5000,
                  br
                  span.fs-i  &nbsp;&nbsp; "__v": 0
                  br
                  span.fs-i }
                  br
                  br
                  span.fs-i {
                  br
                  span.fs-i  &nbsp;&nbsp; "_id": ObjectId("60d2aeaa21a176987f0157487"),
                  br
                  span.fs-i  &nbsp;&nbsp; "name": "Julian",
                  br
                  span.fs-i  &nbsp;&nbsp; "position": "Ingeniero",
                  br
                  span.fs-i  &nbsp;&nbsp; "office": "Cali",
                  br
                  span.fs-i  &nbsp;&nbsp; "salary": 5000,
                  br
                  span.fs-i  &nbsp;&nbsp; "__v": 0
                  br
                  span.fs-i }
                  br
                  br
                  span.fs-i {
                  br
                  span.fs-i  &nbsp;&nbsp; "_id": ObjectId("60d2aeaa21a176987f0157489"),
                  br
                  span.fs-i  &nbsp;&nbsp; "name": "Jaime",
                  br
                  span.fs-i  &nbsp;&nbsp; "position": "Oficial",
                  br
                  span.fs-i  &nbsp;&nbsp; "office": "Juzgados",
                  br
                  span.fs-i  &nbsp;&nbsp; "salary": 8000,
                  br
                  span.fs-i  &nbsp;&nbsp; "__v": 0
                  br
                  span.fs-i }
                  br
                  br
                  span.fs-i {
                  br
                  span.fs-i  &nbsp;&nbsp; "_id": ObjectId("60d64392eadf31b1d99e64f4"),
                  br
                  span.fs-i  &nbsp;&nbsp; "name": "María Isabel",
                  br
                  span.fs-i  &nbsp;&nbsp; "position": "Instructora",
                  br
                  span.fs-i  &nbsp;&nbsp; "office": "Cali",
                  br
                  span.fs-i  &nbsp;&nbsp; "salary": 3000,
                  br
                  span.fs-i  &nbsp;&nbsp; "__v": 0
                  br
                  span.fs-i }
                  br
                  br
        
        .row.mb-5
          .col-auto.d-none.d-md-block 
            figure
              img.mx-auto(src="@/assets/curso/temas/7.svg",style="max-width: 85px;")
          .col 
            p.mb-0 Evidencia de registro en MongoDB: 

        .row.justify-content-center.mb-5
          .col-lg-8
            .bloque-codigo-personalizado(data-aos="flip-up")
              .cabecera-bloque-codigo.p-4.py-3
                .bloque-codigo-circulos 
                  .bloque-codigo-circulo.c1
                  .bloque-codigo-circulo.c2
                  .bloque-codigo-circulo.c3
              .cuerpo-bloque-codigo.p-4
                code.text-wrap
                span.fs-i {
                br
                span.fs-i &nbsp;&nbsp;  "_id": ObjectId("60d64392eadf31b1d99e64f4"),
                br
                span.fs-i &nbsp;&nbsp;  "name": "María Isabel",
                br
                span.fs-i &nbsp;&nbsp;  "position": "Instructora",
                br
                span.fs-i &nbsp;&nbsp;  "office": "Cali",
                br
                span.fs-i &nbsp;&nbsp;  "salary": 3000,
                br
                span.fs-i &nbsp;&nbsp;  "__v": 0
                br
                span.fs-i }

        .row.mb-5
          .col-auto.d-none.d-md-block 
            figure
              img.mx-auto(src="@/assets/curso/temas/34.svg",style="max-width: 85px;")
          .col 
            p.mb-0 En los anteriores códigos se puede evidenciar que los datos se guardan correctamente en la base de datos, indicando que la aplicación desde el #[em front-end] funciona de manera idónea, así como la API REST del proyecto. Con esto se culmina este componente.

        .row.justify-content-center.mb-5
          .col-lg-8
            .fondo-personalizado-3.p-4.borde-11
              .row.align-items-center
                .col-md-auto
                  .d-flex.mb-4.mb-md-0.justify-content-center
                    .burbuja-1.fondo-color-acento-contenido.p-3
                      figure
                        img.mx-auto(src="@/assets/curso/temas/57.svg",style="max-width: 64px;")
                .col 
                  p.mb-0.text-white Se espera que haya sido de aprendizaje el uso de tecnologías tanto del lado del cliente como del lado del servidor. Este es uno de los ejercicios más completos y precisos que se pueden realizar en materia de esta disciplina del desarrollo web. En ese sentido, se exhorta a seguir estudiando más alternativas sobre este tipo de desarrollos que son muy demandados en la industria del #[em software].


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
