<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 1
      h1 Medición de variables eléctricas
  
    p.mb-4(data-aos="fade") Un paso importante cuando se están analizando circuitos digitales es el proceso de medición, porque no solo se limita a tomar valores con un instrumento, sino que va mucho más allá, tal como lo presenta la siguiente figura.  

    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      p.mb-0 <b>Figura 1</b> Aspectos del proceso de medición

    .row.justify-content-center.mb-5
      .col-md-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1-img.svg' alt='Aspectos del proceso de medición')
      .col-md-7(data-aos="fade-left")
        h4.ps-md-5 Aspectos del proceso de medición
        LineaTiempoE.color-acento-contenido
          .row.bg-azul.r-10.p-4
            p.mb-0 Tomar valores con un instrumento.
          .row.bg-morado.r-10.p-4
            p.mb-0 Realizar una buena interpretación de estos datos, aplicando el álgebra de Boole, teoremas y leyes, y las reglas para el análisis.
          .row.bg-azul3.r-10.p-4
            p.mb-0 Tener en cuenta las especificaciones de los elementos inmersos en las mediciones, estos datos son suministrados por los fabricantes en los datasheet, definen los parámetros y características de estos componentes, así como las condiciones óptimas de operación. Es por eso que siempre se debe tener a la mano las hojas de datos de componentes y equipos.

    .row.justify-content-center.cajon-amarillo.cajon.color-primario.p-4.mb-4.mx-1(data-aos="fade-down")
      .col-md-1.p-0.mb-4.mb-md-0
        img(src='@/assets/curso/tema1-icono.svg' alt='Icono')
      .col-md-9
        p.mb-0 Las normas aplicables a los procesos de medición también deben ser tenidas en cuenta, pues estas buscan proteger la vida y preservar el medio ambiente. Es importante consultarlas y aplicarlas en el desarrollo de los procesos de medición.

    p.mb-4(data-aos="fade") Ahora bien, para desarrollar este tipo de procedimientos es necesario recordar y comprender los conceptos que hay alrededor del mismo. Entre ellos, la magnitud eléctrica, la cual se refiere a aquellos procesos físicos asociados al movimiento de electrones y que pueden ser controlados, aprovechados y por lo tanto, se pueden medir. A continuación, se presentan los tipos de magnitudes eléctricas.





    .row.justify-content-center.cajon.color-acento-contenido.p-4.mx-1(data-aos="fade-down")
      .col-md-10
        p.mb-0 En sistemas digitales estas mediciones se centran en determinar tensiones, corrientes muy bajas y también resistencias para limitar y fijar valores. Dentro del análisis circuital son escasas las veces donde se hace necesario recurrir a análisis complejos, siendo suficiente en la mayoría de los casos, la aplicación de la Ley de Ohm.

    Separador


    #t_1_1
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Equipos

    p.mb-4(data-aos="fade") Medir es comparar una magnitud con una unidad preestablecida, la cual está referida a un patrón de medición, que es el que da las pautas para determinar la naturaleza de la medición.  Los instrumentos utilizados en cada caso es un aspecto importante a tener en cuenta en estos procesos. Algunos, en ocasiones, pueden sufrir averías si no se utilizan de forma adecuada.





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
