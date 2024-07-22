<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.pb-0.pb-md-0
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.align-items-center.mb-4 
      .col-md-auto(data-aos="fade-right")
        figure.mb-4.mb-md-0
          img.mx-auto(src="@/assets/curso/temas/1.svg",style="max-width: 102px;")
      .col(data-aos="fade-left")
        p.mb-0 El desarrollo de aplicaciones web modernas requiere la integración de diversas tecnologías y herramientas que permitan crear soluciones robustas, escalables y eficientes. En este componente, se detalla el proceso de construcción de una aplicación web utilizando la arquitectura MEAN, que comprende MongoDB, Express.js, Angular y Node.js. Este conjunto de tecnologías permite desarrollar aplicaciones completas del lado del servidor (#[em back-end]) y del cliente (#[em front-end]), facilitando la creación de sistemas integrados.
    
    .row.align-items-center.mb-4
      .col-lg-8
        .fondo-color-primario.p-4.borde-10.mb-4(data-aos="fade-up")
          p.mb-0.text-white El enfoque principal de este proyecto es la gestión de empleados, abarcando desde la configuración inicial de herramientas y la estructura del proyecto, hasta el desarrollo de controladores, modelos y rutas para la API REST. Además, se explica cómo configurar y utilizar Angular para la creación de componentes y servicios en el #[em front-end], asegurando una interacción fluida y dinámica con el servidor.
        .fondo-color-sistema-i.p-4.borde-10(data-aos="fade-down")
          p.mb-0 Cada sección del componente proporciona instrucciones detalladas y ejemplos de código que guían paso a paso el proceso de desarrollo. Desde la instalación de Node.js y Express, la configuración de la base de datos MongoDB, hasta la integración de Materialize para mejorar la interfaz de usuario, se cubren todos los aspectos necesarios para construir una aplicación web funcional y profesional.
      .col-lg-4.order-first.order-lg-last
        figure.mb-4.mb-lg-0(data-aos="fade-left")
          img.mx-auto(src="@/assets/curso/temas/2.svg",style="max-width: 400px;")
    
    p.mb-5(data-aos="fade") Esto permitirá tener un mayor conocimiento sobre las tecnologías web actuales, especialmente en el uso de las técnicas del lenguaje, los recursos para probar y testear la aplicación, las nuevas formas de sintaxis de algunos lenguajes, los componentes y módulos que harán el trabajo más fácil a los desarrolladores. En últimas palabras, este componente apoya de manera significativa el primer paso para generar competencias y habilidades con el fin de generar nuevas aplicaciones web.

    .fondo-personalizado-1.f1.top-1
      .fondo-personalizado-1__contenido.pb-5
        figure.pb-5(data-aos="flip-up")
          img.mx-auto(src="@/assets/curso/temas/3.svg",style="max-width: 1030px;",alt="Diagrama que ilustra la comunicación entre el FrontEnd y el BackEnd a través de una API y mediante internet. El FrontEnd, que usa JavaScript y varias tecnologías, envía solicitudes y recibe respuestas. Estas solicitudes son procesadas por el BackEnd, que usa varios lenguajes y plataformas.")
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
