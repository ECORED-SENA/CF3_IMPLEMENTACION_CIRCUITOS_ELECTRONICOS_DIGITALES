<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Gestión de documentos

    .d-flex.flex-wrap.flex-md-nowrap.content-text-bg-t3.mb-5
      p.pe-0.pe-md-5 En la implementación de circuitos digitales, al igual que en todo proceso, se generan documentos que forman parte de la gestión dependiendo del ámbito de trabajo. Se deben presentar de forma clara y organizada, evitando posibles errores de interpretación. Incluso si es una implementación solo para su entrenamiento necesitará dejar evidencia del trabajo para posterior consulta. 
        br
        br
        | La mayoría de la documentación presentada en la implementación está asociada con los esquemáticos del circuito, aunque también se incluyen listados de materiales.
      img(src="@/assets/curso/tema3/img-1.png").mb-auto
    .d-flex.pt-4.mb-5
      .col-12.col-md-6
        img(src="@/assets/curso/tema3/img-2.png" style="max-width: 602px").mb-4
        p.text-center Generación de reportes de Proteus, captura de pantalla
      .col-12.col-md-6.my-auto
        .col-10.col-md-6(style="background-color: #F3C178; height: 23px").ms-auto
        p.col-12.col-md-10.ms-auto Por tal razón, la masificación en el uso de herramientas de software asistido por computador ha permitido, que desde el mismo programa se pueda realizar la gestión de dicha documentación, teniendo controles de versiones y cambios realizados a un proyecto en curso.
        img(src="@/assets/curso/tema3/decorador-1.svg" style="max-width: 130px").ms-0.ms-md-5

    .titulo-segundo.color-acento-contenido.mb-5
      h2#t_3_1 3.1. Formatos de evaluación
    
    .container-text-img.col-12.col-md-11.ms-auto.mb-5
      img(src="@/assets/curso/tema3/img-decorador-1.png" style="max-width: 108px; position: absolute; top: -50px; left: -50px; ")
      p.p-4.px-md-5(style="color: white") Incluyen información de los trabajos realizados, cada formato de hoja representa un tamaño que proporciona el espacio o la plantilla para la elaboración del diagrama esquemático. Es importante aclarar que cuando el diagrama esquemático se realiza a través de un software asistido por computador no se emplea una hoja física, pero sí una plantilla que equivale al formato empleado en la impresión física del documento. Por tal razón, la normalización de los formatos empleados en los tamaños de las hojas de dibujo se aplica de igual manera en el software de diseño preferido. 
      img(src="@/assets/curso/tema3/img-decorador-2.png" style="max-width: 155px; position: absolute; bottom: -70px; right: -50px")
    .d-flex.flex-wrap.flex-md-nowrap.pt-5.mb-5
      .col-12.col-md-6.d-flex.pe-0.pe-md-4
        img(src="@/assets/curso/tema3/decorador-2.svg" style="max-width: 35px").mx-4.mx-md-5
        div
          img(src="@/assets/curso/tema3/decorador-3.svg" style="max-width: 40px").ms-auto
          p Estos documentos son importantes, ya que contienen los detalles del proceso, y dentro de ellos, el plan de trabajo; en este debe incluir un consecutivo, procedimiento a realizar, herramientas a utilizar, tiempo estimado de trabajo, observaciones, entre otros.
      .col-12.col-md-6.ps-5
        img(src="@/assets/curso/tema3/decorador-4.svg" style="max-width: 23px").ms-auto
        p En el diagrama esquemático elaborado a mano se utilizan diferentes tipos de papel como medio de soporte para la realización del dibujo, uno de los más utilizados es el papel opaco blanco de diferentes tamaños, los cuales se encuentran normalizados por formatos.
        img(src="@/assets/curso/tema3/decorador-5.svg" style="max-width: 35px")

    .col-12(style="background-color: #0075D8").mb-5
      .col-12.col-md-10.mx-auto.d-flex.flex-wrap
        .col-12.col-md-6.my-auto
          p.text-white No existe un estándar definido para este tipo de formato, solo se debe cumplir la normatividad establecida, cada empresa implementa su propio formato según sus necesidades.
          .d-flex.justify-content-end
            a.boton.me-3.indicador__container(
              :href="obtenerLink('/downloads/ejemplo.pdf')"
              target="_blank"
              type="application/pdf"
              @mouseover="mostrarIndicador = false"
              style="background-color: #FFD947"
            )
              span Ejemplo
              i.fas.fa-file-download
              .indicador--click(v-if="mostrarIndicador")
        .col-12.col-md-6
          img(src="@/assets/curso/tema3/img-3.png" style="margin-top: -40px")
    
    .titulo-segundo.color-acento-contenido.mb-5
      h2#t_3_2 3.2. Informe técnico
    .conatiner-tex-bg-1.mb-5
      p Dentro de los informes finales presentados, una vez culminada la etapa implementación, se anexan los documentos técnicos del circuito diseñado, como por ejemplo, los diagramas esquemáticos,  los archivos de fabricación si se hace necesaria para las máquinas de control numérico. Cada informe responde a aspectos específicos, tal como se aprecia en la siguiente figura.

    .d-flex.justify-content-center.mb-5
      .titulo-segundo.color-acento-contenido
        h2 Figura 4.  Informes técnicos
    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure.col-12.col-md-10.mx-auto
          img(src='@/assets/curso/tema3/img-4.png')

      .tarjeta.color-acento-botones.p-3(x="20.7%" y="78%" numero="" style="background-color: #0057A0")
        p.p-2 Estas se pueden dividir en dos o más, dependiendo del número de etapas  que estén involucradas en la implementación.
      .tarjeta.color-acento-botones.p-3(x="51.5%" y="97%" numero="" style="background-color: #F2BA62")
        p.p-2 Se realiza un documento con los resultados obtenidos y los anexos técnicos necesarios. Este informe 
          | deberá contener las consideraciones y observaciones especiales que se requieran. Se deben dar recomendaciones que lleven a mejorar 
          | la implementación del circuito.
      .tarjeta.color-acento-botones.p-3(x="82%" y="76%" numero="" style="background-color: #9336A9")
        p.p-2 Siempre que sea necesario, son importantes para la comunicación entre cliente – proveedor – fabricante, a través de los programas de fabricación y ser entendidos por las máquinas CAD/CAM.
    
    p Como parte de la documentación también se incluyen los documentos digitales, entre ellos los archivos GERBER, utilizados por los fabricantes de circuitos impresos, ya que contienen la información del circuito impreso; el formato GERBER más utilizado es el formato RS-274X.
    img(src='@/assets/curso/tema3/img-5.png').mb-5

    .container-last-bg
      p La verificación de los circuitos digitales y su posterior documentación es un procedimiento al que se le debe poner especial cuidado, aún si se trata de una implementación simple. Si se trata, por ejemplo, de una implementación para un reporte académico, estos archivos se constituyen en las evidencias a presentar.
    img(src='@/assets/curso/tema3/decorador-6.svg' style="margin-top: -33px; max-width: 42px").mb-5.mx-auto
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    mostrarIndicador: true,
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
.content-text-bg-t3
  position: relative
  p
    position: relative
    z-index: 1
  &::after
    position: absolute
    content: ''
    top: 0
    left: 0
    width: 30%
    height: 46px
    background-color: #E0A5EE
.container-text-img
  position: relative
  background-color: #7C0099
.conatiner-tex-bg-1
  position: relative
  p
    position: relative
    z-index: 1
  &::after
    position: absolute
    content: ''
    top: 0
    left: 0
    height: 20px
    width: 30%
    background-color: #E7CFCD
.container-last-bg
  background-color: #EBD6B7
  padding: 2rem
  border-bottom-left-radius: 45px
  border-top-right-radius: 96px
</style>
