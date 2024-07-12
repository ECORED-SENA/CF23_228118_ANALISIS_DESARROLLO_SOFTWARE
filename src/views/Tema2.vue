<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
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
