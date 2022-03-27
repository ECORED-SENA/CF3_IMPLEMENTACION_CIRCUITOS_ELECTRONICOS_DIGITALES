<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Medición de variables eléctricas
  
    .d-flex.flex-wrap.mb-5
      .col-12.col-md-6
        img(src="@/assets/curso/tema1/img-1.png").pe-5
      .col-12.col-md-6
        img(src="@/assets/curso/tema1/decorador-1.svg" style="max-width: 71px").ms-auto.me-5
        p Un paso importante cuando se están analizando circuitos digitales es el proceso de medición, porque no solo se limita a tomar valores con un instrumento, sino que va mucho más allá, tal como lo presenta la siguiente figura.
        img(src="@/assets/curso/tema1/decorador-2.svg" style="max-width: 80px")
    .d-flex.justify-content-center
      .titulo-segundo.color-acento-contenido
        h2 Figura 1.Aspectos del proceso de medición
    
    img(src="@/assets/curso/tema1/img-2.png").mb-5

    div(style="background-color: #EFDBBE; padding: 1rem").mb-5
      img(src="@/assets/curso/tema1/decorador-3.svg" style="max-width: 40px").mb-3
      p Las normas aplicables a los procesos de medición también deben ser tenidas en cuenta, pues estas buscan proteger la vida y preservar el medio ambiente. 
        | Es importante consultarlas y aplicarlas en el desarrollo de los procesos de medición.
      img(src="@/assets/curso/tema1/decorador-3.svg" style="max-width: 40px; transform: rotate(180deg)").ms-auto

    .d-flex.flex-wrap.mb-5
      .col-12.col-md-7.d-flex
        img(src="@/assets/curso/tema1/decorador-4.svg" style="max-width: 20px; max-height: 90px").mx-5
        .my-auto
          p Ahora bien, para desarrollar este tipo de procedimientos es necesario recordar y comprender los conceptos que hay alrededor del mismo. Entre ellos, la magnitud eléctrica, la cual se refiere a aquellos procesos físicos asociados al movimiento de electrones y que pueden ser controlados, aprovechados y por lo tanto, se pueden medir. A continuación, se presentan los tipos de magnitudes eléctricas.
          img(src="@/assets/curso/tema1/decorador-5.svg" style="max-width: 155px")
      .col-12.col-md-5
        img(src="@/assets/curso/tema1/img-3.png" style="max-width: 335px").mx-auto

    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure.col-12
          img(src='@/assets/curso/tema1/img-4.png')

      .tarjeta.color-acento-botones.p-3(x="2%" y="10%" numero="" style="background-color: #B0C0D2")
        p(style="color: black").text-center {{arrayStepSelect[0]}}
      .tarjeta.color-acento-botones.p-3(x="27.5%" y="10%" numero="" style="background-color: #B0C0D2")
        p(style="color: black").text-center {{arrayStepSelect[1]}}
      .tarjeta.color-acento-botones.p-3(x="52.5%" y="10%" numero="" style="background-color: #B0C0D2")
        p(style="color: black").text-center {{arrayStepSelect[2]}}
      .tarjeta.color-acento-botones.p-3(x="78%" y="10%" numero="" style="background-color: #B0C0D2")
        p(style="color: black").text-center {{arrayStepSelect[3]}}
      .tarjeta.color-acento-botones.p-3(x="27.5%" y="67%" numero="" style="background-color: #B0C0D2")
        p(style="color: black").text-center {{arrayStepSelect[4]}}
      .tarjeta.color-acento-botones.p-3(x="53%" y="67%" numero="" style="background-color: #B0C0D2")
        p(style="color: black").text-center {{arrayStepSelect[5]}}

    div(style="background-color: #E4BDE2; padding: 1rem").mb-5
      img(src="@/assets/curso/tema1/decorador-6.svg" style="max-width: 64px").mb-3
      p En sistemas digitales estas mediciones se centran en determinar tensiones, corrientes muy bajas y también resistencias para limitar y fijar valores. Dentro del análisis  
        | circuital son escasas las veces donde se hace necesario recurrir a análisis complejos, siendo suficiente en la mayoría de los casos, la aplicación de la Ley de Ohm.
      img(src="@/assets/curso/tema1/decorador-6.svg" style="max-width: 64px; transform: rotate(180deg)").ms-auto
    
    .titulo-segundo.color-acento-contenido
      h2#t_1_1 1.1. Equipos
    
    .d-flex.flex-wrap.flex-md-nowrap.align-items-end.mb-5
      img(src="@/assets/curso/tema1/decorador-7.svg" style="max-width: 12px").mx-5
      p.pe-0.pe-md-5.me-0.me-md-5.mb-0 Medir es comparar una magnitud con una unidad preestablecida, la cual está referida a un patrón de medición, que es el que da las pautas para determinar la naturaleza de la medición.  Los instrumentos utilizados en cada caso es un aspecto importante a tener en cuenta en estos procesos. Algunos, en ocasiones, pueden sufrir averías si no se utilizan de forma adecuada.
      img(src="@/assets/curso/tema1/img-5.png" style="max-width: 431px")
    
    .d-flex.align-items-center.mb-5(
      :style="{'background-image': `url(${require('@/assets/curso/tema1/decorador-8.svg')})`}"
      style="min-height: 275px"
    )
      .col-12.col-md-10.ms-auto.d-flex.flex-wrap.flex-md-nowrap
        img(src="@/assets/curso/tema1/img-6.png" style="max-width: 448px;")
        .position-relative.mt-auto
          p.col-12.col-md-10.ms-auto.p-3(style="background-color: #DEE4F0") Por ejemplo, si se tiene un multímetro seleccionado como ohmímetro y, por accidente medimos tensión es probable que el instrumento sufra algún daño, esa es una desventaja de incluir múltiples instrumentos (multímetro) en un solo <b>equipo</b>.
          img(src="@/assets/curso/tema1/decorador-6.svg" style="max-width: 64px; margin-top: -1.5rem").ms-auto.me-3

    .col-12.col-md-11(style="background-color: #E4BDE2").ms-auto.mb-5
     p.col-12.col-md-11.ms-auto.py-3 Aparte del multímetro, el equipo de medición más utilizado en digitales es la punta lógica y para el análisis de circuitos secuenciales, el analizador lógico; sin embargo, para este caso el enfoque estará en la punta lógica.
    
    .position-relative
      .col-10.ms-auto
        img(src="@/assets/curso/tema1/decorador-5.svg"  style="max-width: 155px; margin-bottom: -2rem")
      SlyderB.mb-5(:datos="datosSlyder").carousel_t_1

    .titulo-segundo.color-acento-contenido
      h2#t_1_2 1.2. Métodos
    
    .d-flex
      img(src="@/assets/curso/tema1/decorador-9.svg" style="max-width: 51px").mx-4
      p Siempre que se habla de métodos de medición hay algo en común “comparar”, precisamente porque eso es lo que se hace cuando se mide, se compara; para esto hay que definir un patrón y ese patrón es el que sirve de guía para que los demás se comparen con respecto a él. Estos patrones se definen utilizando la mayor tecnología posible y los valores se obtienen de procesos donde no dependa de la intervención humana, esto minimiza el error.
    img(src="@/assets/curso/tema1/decorador-10.svg" style="max-width: 137px").ms-auto.me-5.mb-5

    .d-flex.mb-5.fondo-medio
      p Para las magnitudes eléctricas todas las unidades están bien definidas y también los instrumentos de medición, por lo que todas las mediciones efectuadas son de manera directa, aquí solo se deben calcular e interpretar. En digitales solo se debe determinar si hay o no presencia de tensión (diferencia de potencial) y de cómo cambia en el tiempo (frecuencia eléctrica).
      img(src="@/assets/curso/tema1/decorador-11.svg" style="max-width: 71px").mx-4
    
    .d-flex.align-items-center.mb-5(
      :style="{'background-image': `url(${require('@/assets/curso/tema1/img-8.png')})`}"
      style="min-height: 275px;"
    )
      .col-12.col-md-10.mx-auto.d-flex.flex-wrap.flex-md-nowrap.align-items-center
        p(style="background-color: #DEE4F0").p-2 El método más común de medición en digitales es utilizando la punta lógica y esta indica el estado actual de la entrada o salida mediante luces, casi siempre se usa una luz indicadora en verde para indicar el estado alto o 1 y una luz indicadora roja para indicar estado bajo o 0 lógico.
        img(src="@/assets/curso/tema1/img-7.png").mx-4
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    stepSelected: 0,
    arrayStepSelect: [
      'Unidad de medida: Voltio (V). Instrumento de medición: Voltímetro. Elemento asociado: Batería o fuente de poder.',
      'Unidad de medida: Amperio (A). Instrumento de medición: Amperímetro. Elemento asociado: Fuente de corriente',
      'Unidad de medida: Ohmio (Ω). Instrumento de medición: Ohmímetro. Elemento asociado: Resistor o potenciómetro.',
      'Unidad de medida: Faradio (F). Instrumento de medición: Capacímetro. Elemento asociado: Condensador, filtro.',
      'Unidad de medida: Henrio (H). Instrumento de medición: Inductómetro. Elemento asociado: Bobina o transformador.',
      'Unidad de medida: Hertz (Hz). Instrumento de medición: Osciloscopio. Elemento asociado: Generador de señal.',
    ],
    datosSlyder: [
      {
        titulo: 'La punta lógica',
        texto:
          'Permite identificar estados en la entrada o salida de un determinado componente, pero estos estados suelen ser estáticos; para el caso de estados que cambian con el tiempo, esta solo se limita a mostrar información por medio de un indicador que es cambiante, pero no indica  la frecuencia a la que lo hace; para estos casos es necesario utilizar el analizador lógico. ',
        imagen: require('@/assets/curso/tema1/img-carousel-1.png'),
      },
      {
        titulo: 'Analizador lógico',
        texto:
          'Este equipo brinda información en tiempo real de los cambios de 0 y 1  lógico en determinados puntos de un circuito digital, generalmente se componen de múltiples entradas y muestran en pantalla integrada o conectado al PC, el comportamiento de las variables del circuito.',
        imagen: require('@/assets/curso/tema1/img-carousel-2.png'),
      },
    ],
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

<style lang="sass">
.carousel_t_1
  .row
    margin-top: auto
    margin-bottom: auto
  .slyder-b__img img
    max-width: 272px
    margin-right: auto
    margin-left: auto
  .slyder-b__slyde
    background-image: url('../assets/curso/tema1/decorador-8.svg')
    min-height: 263px
    padding: 2rem
  .col-lg-8
    margin-top: auto
    width: 33.333% !important
  .col-lg-4
    margin-top: auto
    width: 66.666% !important
  @media (max-width: 1000px)
    .col-lg-8
      width: 100% !important
    .col-lg-4
      width: 100% !important
.fondo-medio
  position: relative
  &::after
    content: ''
    position: absolute
    width: 40%
    height: 100%
    background-color: #FCECD5
  p
    position: relative
    z-index: 1
    margin-bottom: 1rem
    margin-top: 1rem
</style>
