<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 2
      h1 Procedimientos de identificación de fallas

    .row.justify-content-center.mb-4
      .col-md-6.mb-4.mb-md-0(data-aos="fade-right")
        h4 Los procedimientos para identificar fallas en circuitos digitales pueden diferir de los de la electrónica análoga. Si bien se están midiendo variables correspondientes a las mismas magnitudes físicas, lo que estas representan es lo que hace diferente el proceso. 
      .col-md-6(data-aos="fade-left")
        p  Las principales fallas en circuitos digitales se originan en la fuente de alimentación, estos módulos generan fluctuaciones que, en circuitos digitales de alta velocidad, es suficiente para generar una pérdida de un dato, un bit cambiado en una información puede repercutir en un mal funcionamiento, es por eso que en la mayoría de los sistemas digitales se incluyen procesos de detección de errores. La siguiente figura presenta un ejemplo de ello.
    
    .titulo-sexto.color-acento-contenido.mb-md-2(data-aos="fade-right")
      p.mb-0 <b>Figura 2</b> Ejemplo en la identificación de fallas

    .row.align-items-center.justify-content-end.p-relative
      .col-md-5.texto-destacado-azul.p-0
        p.mb-0.p-4 En un disco compacto, por ejemplo, debido a la alta manipulación de este se presentan muchas pérdidas de datos, rayones, exposición al sol y altas temperatura, que eran causantes del deterioro de datos grabados, lo que generaba fallas de funcionamiento en el dispositivo, es por esto que la mayoría de datos grabados en un CD eran utilizados para el control de pérdida de datos.   
        p.mb-0.bg-azul.p-4 Son precisamente los sistemas con memoría los que presentan mayores fallas, puesto que los datos grabados pueden sufrir alteraciones por fenómenos externos.
      .col-md-5.col-lg-6.tema2-img-absoluta.p-0
        img(src='@/assets/curso/tema2-img.png', alt='Imagen decorativa')

    Separador


    #t_2_1
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1. Conceptos y métodos

    p(data-aos="fade") Una de las grandes ventajas de los sistemas digitales es que las fallas se pueden predecir, por lo que es posible generar un autodiagnóstico, es decir, que el sistema se prueba a sí mismo. Este proceso es conocido como POST (Power On Self Test) o autoprueba de encendido, es muy utilizado en sistemas de cómputo. 
    
    p.mb-5(data-aos="fade") Las fallas más comunes en estos circuitos se presentan debido a los siguientes procesos que se muestran en la figura 3.

    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      p.mb-0 <b>Figura 3</b> Fallas comunes

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-10
        figure
          img(src='@/assets/curso/tema2-1-figura.svg', alt='Fallas comunes')

    p.mb-4(data-aos="fade") Los métodos de detección de fallas siguen los mismos conceptos aplicados en la mayoría de resolución de problemas. En general se deben seguir estos pasos:

    TabsA.color-acento-contenido.mb-5
      .row.tarjeta.bg-azul2.r-10.p-4(titulo="Detección de la falla")
        .col-md-12
          p.mb-4 Aplicar los procedimientos ya conocidos para hacerle seguimiento al problema, aplicando la lógica y el análisis, hasta encontrar el origen del problema.
        .col-md-6.mb-3.mb-md-0
          img(src='@/assets/curso/tema2-1-pesta1.png', alt='Detección de la falla')
        .col-md-6
          p Por ejemplo, se requiere determinar el comportamiento de la salida  en el circuito de la siguiente figura, nótese que aunque es un circuito combinacional la entrada está alimentada por una señal cambiante, es decir, una señal de pulsos, también conocida como señal de reloj, utilizada más que todo en circuitos secuenciales. Esa señal puede hacer que la salida también sea cambiante en el tiempo, entonces eso es lo primero que se debe determinar. 
        .col-md-12


        
    .row.justify-content-center.cajon.color-acento-contenido.p-4.mb-4.mx-1
      .col-md-10
        p.mb-0 Las fallas más comunes en los componentes electrónicos se debe al mal funcionamiento de la circuitería interna, también influyen las entradas o salidas en cortocircuito con conexión a  GND  o Vcc y entradas o salidas en circuito abierto o cortocircuito entre dos terminales (diferentes de la GND y Vcc).





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
