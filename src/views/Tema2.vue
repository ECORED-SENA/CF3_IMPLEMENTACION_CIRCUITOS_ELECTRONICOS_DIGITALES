<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Procedimientos de identificación de fallas

    .d-flex.flex-wrap.flex-md-nowrap.align-items-start.mb-5
      img(src="@/assets/curso/tema2/decorador-1.svg" style="max-width: 41px").mx-4
      .contenedor-text-tema2.mt-4.pe-5
        p Los procedimientos para identificar fallas en circuitos digitales pueden diferir de los de la electrónica análoga. Si bien se están midiendo variables correspondientes a las mismas magnitudes físicas, lo que estas representan es lo que hace diferente el proceso. 
      img(src="@/assets/curso/tema2/img-1.png" style="max-width: 404px")
    div
      img(src="@/assets/curso/tema2/decorador-2.svg" style="max-width: 155px").mb-3
      p Las principales fallas en circuitos digitales se originan en la fuente de alimentación, estos módulos generan fluctuaciones que, en circuitos digitales de alta velocidad, es suficiente para generar una pérdida de un dato, un bit cambiado en una información puede repercutir en un mal funcionamiento, es por eso que en la mayoría de los sistemas digitales se incluyen procesos de detección de errores. La siguiente figura presenta un ejemplo de ello.
      img(src="@/assets/curso/tema2/decorador-3.svg" style="max-width: 75px; margin-right: 4rem").ms-auto

    .d-flex.justify-content-center
      .titulo-segundo.color-acento-contenido
        h2 Figura 2.  Ejemplo en la identificación de fallas
    img(src="@/assets/curso/tema2/img-2.svg").mb-5

    .titulo-segundo.color-acento-contenido.mb-0
      h2#t_2_1 2.1. Conceptos y métodos
    img(src="@/assets/curso/tema2/decorador-4.svg" style="max-width: 75px; margin-top: -75px").ms-auto.mb-5

    p Una de las grandes ventajas de los sistemas digitales es que las fallas se pueden predecir, por lo que es posible generar un autodiagnóstico, es decir, que el sistema se prueba a sí mismo. Este proceso es conocido como POST (Power On Self Test) o autoprueba de encendido, es muy utilizado en sistemas de cómputo. 
    .container-text-t-2.mb-5
      p Las fallas más comunes en estos circuitos se presentan debido a los siguientes procesos que se muestran en la figura 3.
    img(src="@/assets/curso/tema2/decorador-5.svg" style="max-width: 155px;").mb-5

    .d-flex.justify-content-center
      .titulo-segundo.color-acento-contenido
        h2 Figura 3.  Fallas comunes
    img(src="@/assets/curso/tema2/img-3.svg").ms-auto.mb-5

    .col-12.col-md-11.ms-auto
      p.mb-0 Los métodos de detección de fallas siguen los mismos conceptos aplicados en la mayoría de resolución de problemas. En general se deben seguir estos pasos:
      img(src="@/assets/curso/tema2/decorador-6.svg" style="max-width: 129px").ms-auto.mb-5.me-5
    
    ImagenInfografica.color-secundario.mb-5.infografia-t2-a
      template(v-slot:imagen)
        figure.col-12
          img(src='@/assets/curso/tema2/img-4.png')

      .tarjeta.color-acento-botones.p-3(x="16.5%" y="10.5%" numero="1" style="background-color: #EBD6B7")
        p(style="color: black").mb-4.text-center Aplicar los procedimientos ya conocidos para hacerle seguimiento al problema, aplicando la lógica y el análisis, hasta encontrar el origen del problema.
          br
          br
          | Por ejemplo, se requiere determinar el comportamiento de la salida  en el circuito de la siguiente figura, nótese que aunque es un circuito combinacional la entrada está alimentada por una señal cambiante, es decir, una señal de pulsos, también conocida como señal de reloj, utilizada más que todo en circuitos secuenciales. Esa señal puede hacer que la salida también sea cambiante en el tiempo, entonces eso es lo primero que se debe determinar. 
        img(src="@/assets/curso/tema2/img-info-1.svg" style="max-width: 200px").mx-auto
      .tarjeta.color-acento-botones.p-3(x="58%" y="10%" numero="2" style="background-color: #EBD6B7")
        p(style="color: black").mb-4.text-center Una vez detectado el problema se debe aislar, es decir, verificar que sea solo este y que los circuitos asociados estén en funcionamiento. 
          br
          br
          | Algunas veces es necesario utilizar un par, es decir, uno que haga la misma función y esté operando normalmente. Será necesario intercambiar elementos, siempre y cuando no represente mucho riesgo para el componente,  el montaje y desmontaje de estos.
        img(src="@/assets/curso/tema2/img-info-2.svg" style="max-width: 200px").mx-auto
      .tarjeta.color-acento-botones.p-3(x="33%" y="40%" numero="3" style="background-color: #EBD6B7")
        p(style="color: black").mb-4.text-center Finalmente, se debe reemplazar el componente dañado y verificar su funcionamiento óptimo, algunas veces el daño de un componente repercute en otros, afectando su funcionamiento normal. 
        img(src="@/assets/curso/tema2/img-info-3.svg" style="max-width: 200px").mx-auto

    .titulo-segundo.color-acento-contenido.mb-5
      h2#t_2_2 2.2. Equipos y software de diagnóstico
    
    .d-flex.flex-wrap.flex-md-nowrap.mb-5(:style="{'background-image': `url(${require('@/assets/curso/tema2/img-6.png')})`}" style="background-repeat: no-repeat; background-size: cover; height: 376px")
      .col-12.col-md-6.my-auto
        img(src="@/assets/curso/tema2/img-5.png" style="max-width: 409px").mx-auto.mb-4
        .col-12.col-md-10.ms-auto
          p.mb-0 Equipo de diagnóstico avanzado, tomado de Cedesa (s.f.). Estos equipos son costosos y normalmente se encuentran en empresas de alta producción.
      .col-12.col-md-6.container-color-text.my-auto
        p Además de los equipos ya mencionados, los que generalmente ofrecen las prestaciones necesarias para la mayoría de los problemas presentados en circuitería digital, existen otros equipos de diagnóstico avanzado, los cuales son más que todo utilizados para diagnosticar tarjetas electrónicas, que generalmente necesitan de un par, es decir, una tarjeta en buen estado, que sirve para establecer unos parámetros, que luego serán comparados en la tarjeta problemática.

    .d-flex
      img(src="@/assets/curso/tema2/decorador-7.svg" style="max-width: 71px")
      p.mx-5 Contar con un equipo de esta tecnología puede ser ventajoso, debido a que basan su funcionamiento en la utilización de un par o la predicción del funcionamiento de ciertos componentes, una persona con habilidades en reparación puede lograr buenos diagnósticos, utilizando equipos más simples como analizadores lógicos y puntas de pruebas.
        br
        | Para complementar el estudio del uso de este dispositivo, se invita a ver el video “Tutorial analizador lógico USB”, que se encuentra en el material complementario. 
    img(src="@/assets/curso/tema2/decorador-8.svg" style="max-width: 71px; margin-top: -71px").ms-auto.mb-5

    .d-flex.flex-wrap.flex-md-nowrap.align-items-start.mb-5
      img(src="@/assets/curso/tema2/decorador-9.svg" style="max-width: 44px").me-0.me-md-4
      p.mt-4.me-0.mx-md-5 El software de diagnóstico, por su parte, se constituye en una herramienta útil para el análisis de circuitos. Generalmente viene asociado a las herramientas ya mencionadas, analizadores lógicos y a las de diagnóstico avanzado.
      img(src="@/assets/curso/tema2/img-7.png" style="max-width: 447px")
    
    .d-flex.mb-5
      .col-12.col-md-6
        img(src="@/assets/curso/tema2/img-8.png" style="max-width: 559px").mb-4
        p.ps-0.ps-md-5.ms-0.ms-md-5 Software de Elvis, captura de pantalla<br> Algunas plataformas educativas incluyen este tipo de software para pruebas de montajes, es decir, se pueden hacer pruebas de circuitos, inyectando señales generadas por el programa y esperando unos resultados; Elvis de National Instruments es un ejemplo.
      .col-12.col-md-6.texto-con-color.mt-5
        img(src="@/assets/curso/tema2/decorador-10.svg" style="max-width: 41px").ms-auto
        p Los equipos que cuentan con un sistema de cómputo integran el software de diagnóstico, es decir, el POST. Aunque se puede complementar con software externo para un diagnóstico completo, un ejemplo de esto puede ser la herramienta que viene incluida en el POST de las PC para diagnosticar el disco duro, pero se puede complementar con una herramienta como defrag para un diagnóstico avanzado del mismo, sin incluir más herramientas.
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

<style lang="sass">
.contenedor-text-tema2
  position: relative
  p
    position: relative
    z-index: 1
    margin-bottom: 0
  &::after
    position: absolute
    content: ''
    top: 0
    left: 0
    width: 70%
    height: 34px
    background-color: #AFD6E9
.container-text-t-2
  position: relative
  p
    position: relative
    z-index: 1
  &::after
    position: absolute
    content: ''
    width: 40%
    height: 100%
    bottom: 0
    right: 30%
    z-index: 0
    background-color: #CBDAE6
.infografia-t2-a
  .img-infografica__card
    width: 500px
.container-color-text
  position: relative
  margin-bottom: auto
  p
    position: relative
    z-index: 1
    margin-bottom: 0
  &::after
    content: ''
    position: absolute
    width: 70%
    height: 55%
    right: 0
    bottom: 1rem
    background-color: #E7CFCD
.texto-con-color
  position: relative
  margin-bottom: auto
  p
    position: relative
    z-index: 1
  &::after
    content: ''
    position: absolute
    left: 0
    top: 45%
    height: 25%
    width: 60%
    background-color: #F3C178
</style>
