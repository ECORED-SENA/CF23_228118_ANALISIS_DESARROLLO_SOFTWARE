<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Construcción del #[em back-end] de la aplicación web
    
    .row.align-items-center.mb-5
      .col-lg-9
        .fondo-personalizado-2.py-5.px-4.borde-20
          .row.align-items-center
            .col-md-auto
              .d-flex.mb-4.mb-md-0.justify-content-center
                .burbuja-1.fondo-color-acento-contenido.p-2
                  figure
                    img.mx-auto(src="@/assets/curso/temas/5.svg",style="max-width: 81px;")
            .col 
              p.mb-0.text-white Se inicia con una estructura de proyecto #[em MEAN] (Mongo, Express, Angular y Node.js) para el proyecto que abarca tanto el #[em front-end] como el #[em back-end]. Para la instalación de las primeras herramientas como Node.js y Express.

      .col-lg-3.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/6.svg",style="max-width: 295px;")
    
    Separador

    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1. Instalación y configuración de herramientas de Node.js
    
    .row 
      .col-auto.d-none.d-md-block 
        figure
          img.mx-auto(src="@/assets/curso/temas/7.svg",style="max-width: 85px;")
      .col 
        p.mb-0 Se utiliza Visual Studio Code (VS Code) con la siguiente estructura de directorios para el #[em back-end], detallada a continuación:

    .fondo-personalizado-1.f2.top-1
      .fondo-personalizado-1__contenido.pb-4
        p(style="color: red;") seccion de codigo con listado de estructura

        .row.mb-5
          .col-lg-8.mb-4.mb-lg-0
            p.mb-0 Como se presentó anteriormente, se crea la carpeta #[b GESTION-EMPLEADOS], que será la principal o raíz del proyecto. Dentro de esta, se crea la carpeta #[em back-end], en la cual se crean otros directorios y archivos. De tal forma, esta será la estructura que apoyará el desarrollo de la base de la aplicación. Una vez creadas las carpetas y archivos, como #[em controllers, models, routes, database.js e index.js], se abre la terminal del VS Code y se digita el siguiente comando para crear un proyecto #[b Node.js: npm init -yes]
          .col-lg-4
            figure
              img.mx-auto(src="@/assets/curso/temas/8.svg",style="max-width: 400px;")
        
        .row.justify-content-center.mb-5
          .col-lg-6
            .bloque-codigo-personalizado(data-aos="flip-up")
              .cabecera-bloque-codigo.p-4.py-3
                .bloque-codigo-circulos 
                  .bloque-codigo-circulo.c1
                  .bloque-codigo-circulo.c2
                  .bloque-codigo-circulo.c3
              .cuerpo-bloque-codigo.p-4
                code.text-wrap
                  span.c-color-acento-contenido.fw-bold PROBLEMS | OUTPUT | TERMINAL | DEBUG CONSOLE
                  br
                  br
                  span.fs-i Windows PowerShell
                  br
                  span.fs-i Copyright (C) Microsoft Corporation. Todos los derechos reservados.
                  br
                  span.fs-i Prueba la nueva tecnología PowerShell multiplataforma https://aka.ms/pscore6
                  br
                  span.fs-i PS D:\gestion-empleados> npm init --yes
        
        p.mb-0 Una vez creado el proyecto, se requieren todas las bondades del #[em framework] de Node.js, para lo cual es necesario Express. Express generará una serie de componentes que ayudarán mucho al desarrollo de esta aplicación. Por lo tanto, se instala Express con la siguiente línea de comandos desde la terminal del VS Code: #[b npm install express].

    Separador

    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2. Desarrollo del index.js
    
    .row.mb-4 
      .col-auto.d-none.d-md-block 
        figure
          img.mx-auto(src="@/assets/curso/temas/7.svg",style="max-width: 85px;")
      .col 
        p.mb-0 El siguiente paso es iniciar con el desarrollo del archivo principal del back-end, que se llama index.js como se presenta a continuación:
    
    .row.justify-content-center.mb-5
      .col-lg-6
        .bloque-codigo-personalizado(data-aos="flip-up")
          .cabecera-bloque-codigo.p-4.py-3
            .bloque-codigo-circulos 
              .bloque-codigo-circulo.c1
              .bloque-codigo-circulo.c2
              .bloque-codigo-circulo.c3
          .cuerpo-bloque-codigo.p-4
            code.text-wrap
              


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
