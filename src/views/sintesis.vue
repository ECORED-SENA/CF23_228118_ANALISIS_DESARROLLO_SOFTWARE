<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se muestra un mapa conceptual con los elementos más importantes desarrollados en este componente.

    .row.justify-content-center
      .col-lg-10.mb-5
        .fondo-color-sistema-h.borde-20.p-2
          figure
            img(src="@/assets/curso/temas/sintesis.svg", alt="Diagrama que detalla la construcción de una aplicación web, dividiéndola en dos partes principales: Back-End y Front-End. El Back-End incluye configuración inicial, desarrollo del servidor, base de datos, modelos y rutas, controladores, y pruebas. El Front-End abarca configuración inicial, desarrollo, servicios y componentes, e interfaz de usuario. Cada sección desglosa tareas específicas, como herramientas utilizadas, estructura del proyecto, configuración de rutas, y generación de componentes.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
