<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    img(src="@/assets/curso/img-introduccion.png").mb-5

    p.mb-5 El diagnóstico de circuitos electrónicos inicia con un proceso de medición e identificación de fallas para poder determinar su estado, generando al final un informe técnico. El siguiente video expone un panorama general de este procedimiento.

    figure.my-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/OuvTHDUgcLQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
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
