<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 1
      h1 Medición de variables eléctricas
  
    p.mb-4(data-aos="fade") Un paso importante cuando se están analizando circuitos digitales es el proceso de medición, porque no solo se limita a tomar valores con un instrumento, sino que va mucho más allá, tal como lo presenta la siguiente figura.  




    
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({}),
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
