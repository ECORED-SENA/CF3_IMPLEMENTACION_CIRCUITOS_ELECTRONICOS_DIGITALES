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

    p.mb-5(data-aos="fade") Ahora bien, para desarrollar este tipo de procedimientos es necesario recordar y comprender los conceptos que hay alrededor del mismo. Entre ellos, la magnitud eléctrica, la cual se refiere a aquellos procesos físicos asociados al movimiento de electrones y que pueden ser controlados, aprovechados y por lo tanto, se pueden medir. A continuación, se presentan los tipos de magnitudes eléctricas.

    .row.justify-content-center
      .col-md-11
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1-infografia.svg', alt='Tipos de magnitudes eléctricas')

          .bg-1.color-acento-botones.p-3(x="36.5%" y="26.5%" numero="")
            p.mb-0 <b>Unidad de medida:</b> Ohmio (Ω). 
            p.mb-0 <b>Instrumento de medición:</b> Ohmímetro. 
            p.mb-0 <b>Elemento asociado:</b> Resistor o potenciómetro.
          .bg-1.color-acento-botones.p-3(x="33%" y="49%" numero="")
            p.mb-0 <b>Unidad de medida:</b> Amperio (A). 
            p.mb-0 <b>Instrumento de medición:</b> Amperímetro. 
            p.mb-0 <b>Elemento asociado:</b> Fuente de corriente.
          .bg-1.color-acento-botones.p-3(x="36.5%" y="71.5%" numero="")
            p.mb-0 <b>Unidad de medida:</b> Voltio (V). 
            p.mb-0 <b>Instrumento de medición:</b> Voltímetro. 
            p.mb-0 <b>Elemento asociado:</b> Batería o fuente de poder.  

          .bg-1.color-acento-botones.p-3(x="64.5%" y="26.5%" numero="")
            p.mb-0 <b>Unidad de medida:</b> Faradio (F). 
            p.mb-0 <b>Instrumento de medición:</b> Capacímetro.
            p.mb-0 <b>Elemento asociado:</b> Condensador, filtro..
          .bg-1.color-acento-botones.p-3(x="68%" y="49%" numero="")
            p.mb-0 <b>Unidad de medida:</b> Henrio (H).
            p.mb-0 <b>Instrumento de medición:</b> Inductómetro. 
            p.mb-0 <b>Elemento asociado:</b> Bobina o transformador.
          .bg-1.color-acento-botones.p-3(x="64.5%" y="71.5%" numero="")
            p.mb-0 <b>Unidad de medida:</b> Hertz (Hz).
            p.mb-0 <b>Instrumento de medición:</b> Osciloscopio. 
            p.mb-0 <b>Elemento asociado:</b> Generador de señal.    


    .row.justify-content-center.cajon.color-acento-contenido.p-4.mx-1(data-aos="fade-down")
      .col-md-10
        p.mb-0 En sistemas digitales estas mediciones se centran en determinar tensiones, corrientes muy bajas y también resistencias para limitar y fijar valores. Dentro del análisis circuital son escasas las veces donde se hace necesario recurrir a análisis complejos, siendo suficiente en la mayoría de los casos, la aplicación de la Ley de Ohm.

    Separador


    #t_1_1
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Equipos

    p.mb-5(data-aos="fade") Medir es comparar una magnitud con una unidad preestablecida, la cual está referida a un patrón de medición, que es el que da las pautas para determinar la naturaleza de la medición.  Los instrumentos utilizados en cada caso es un aspecto importante a tener en cuenta en estos procesos. Algunos, en ocasiones, pueden sufrir averías si no se utilizan de forma adecuada.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1-1-img.jpg')})`}" )
          .bloque-texto-g__texto.p-4.py-md-5
            p.mb-0 Por ejemplo, si se tiene un multímetro seleccionado como ohmímetro y, por accidente medimos tensión es probable que el instrumento sufra algún daño, esa es una desventaja de incluir múltiples instrumentos (multímetro) en un solo equipo. 

    p.mb-5(data-aos="fade") Aparte del multímetro, el equipo de medición más utilizado en digitales es la punta lógica y para el análisis de circuitos secuenciales, el analizador lógico; sin embargo, para este caso el enfoque estará en la punta lógica.

    .row.d-flex.tarjetas1-1.justify-content-around
      .col-md-6.bg-morado.r-10.p-0.mb-4.mb-md-0
        h3.text-center.mb-0.p-3 La punta lógica 
        img(src='@/assets/curso/tema1-1-img2.jpg' alt='La punta lógica')
        p.mb-0.p-4.py-5 Permite identificar estados en la entrada o salida de un determinado componente, pero estos estados suelen ser estáticos; para el caso de estados que cambian con el tiempo, esta solo se limita a mostrar información por medio de un indicador que es cambiante, pero no indica  la frecuencia a la que lo hace; para estos casos es necesario utilizar el analizador lógico. 
      .col-md-6.bg-azul4.r-10.p-0.mb-4.mb-md-0
        h3.text-center.mb-0.p-3 Analizador lógico 
        img(src='@/assets/curso/tema1-1-img3.jpg' alt='Analizador lógico')
        p.mb-0.p-4.py-5 Este equipo brinda información en tiempo real de los cambios de 0 y 1  lógico en determinados puntos de un circuito digital, generalmente se componen de múltiples entradas y muestran en pantalla integrada o conectado al PC, el comportamiento de las variables del circuito.

    Separador


    #t_1_2
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Métodos

    .row.justify-content-center.mb-3
      .col-md-6.mb-4.mb-md-0(data-aos="fade-right")
        img.mb-3(src='@/assets/curso/tema1-2-img.png' alt='Equipo de diagnóstico avanzado, tomado de Cedes')
      .col-md-6(data-aos="fade-left")
        p Siempre que se habla de métodos de medición hay algo en común “comparar”, precisamente porque eso es lo que se hace cuando se mide, se compara; para esto hay que definir un patrón y ese patrón es el que sirve de guía para que los demás se comparen con respecto a él. Estos patrones se definen utilizando la mayor tecnología posible y los valores se obtienen de procesos donde no dependa de la intervención humana, esto minimiza el error.
        p.mb-0 Para las magnitudes eléctricas todas las unidades están bien definidas y también los instrumentos de medición, por lo que todas las mediciones efectuadas son de manera directa, aquí solo se deben calcular e interpretar.
        p.bold En digitales solo se debe determinar si hay o no presencia de tensión (diferencia de potencial) y de cómo cambia en el tiempo (frecuencia eléctrica).


    p El método más común de medición en digitales es utilizando la punta lógica y esta indica el estado actual de la entrada o salida mediante luces, casi siempre se usa una luz indicadora en verde para indicar el estado alto o 1 y una luz indicadora roja para indicar estado bajo o 0 <b>lógico</b>.




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
