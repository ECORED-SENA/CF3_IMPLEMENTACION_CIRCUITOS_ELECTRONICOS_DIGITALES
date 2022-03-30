<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 3
      h1 Gestión de documentos

    .row.justify-content-center.mb-4
      .col-md-6.mb-4.mb-md-0(data-aos="fade-right")
        p <b style="font-size: 18px;">En la implementación de circuitos digitales, al igual que en todo proceso, se generan documentos que forman parte de la gestión dependiendo del ámbito de trabajo.</b> Se deben presentar de forma clara y organizada, evitando posibles errores de interpretación. Incluso si es una implementación solo para su entrenamiento necesitará dejar evidencia del trabajo para posterior consulta. 
        p La mayoría de la documentación presentada en la implementación está asociada con los esquemáticos del circuito, aunque también se incluyen listados de materiales.
      .col-md-6(data-aos="fade-left")
        img.mb-3(src='@/assets/curso/tema3-img1.png' alt='Gestión de documentos')
        .titulo-img.color-acento-contenido
          p.f-13.text-center.mb-0 Generación de reportes de Proteus, captura de pantalla

    p(data-aos="fade") Por tal razón, la masificación en el uso de herramientas de software asistido por computador ha permitido, que desde el mismo programa se pueda realizar la gestión de dicha documentación, teniendo controles de versiones y cambios realizados a un proyecto en curso.
    
    Separador


    #t_3_1
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1. Formatos de evaluación

    .row.justify-content-center.cajon-amarillo.cajon.color-primario.p-4.mb-4.mx-1(data-aos="fade-down")
        .col-md-10
          p.mb-0 Incluyen información de los trabajos realizados, cada formato de hoja representa un tamaño que proporciona el espacio o la plantilla para la elaboración del diagrama esquemático. Es importante aclarar que cuando el diagrama esquemático se realiza a través de un software asistido por computador no se emplea una hoja física, pero sí una plantilla que equivale al formato empleado en la impresión física del documento. Por tal razón, la normalización de los formatos empleados en los tamaños de las hojas de dibujo se aplica de igual manera en el software de diseño preferido. 

    p(data-aos="fade") Estos documentos son importantes, ya que contienen los detalles del proceso, y dentro de ellos, el plan de trabajo; en este debe incluir un consecutivo, procedimiento a realizar, herramientas a utilizar, tiempo estimado de trabajo, observaciones, entre otros.

    p.mb-5(data-aos="fade") En el diagrama esquemático elaborado a mano se utilizan diferentes tipos de papel como medio de soporte para la realización del dibujo, uno de los más utilizados es el papel opaco blanco de diferentes tamaños, los cuales se encuentran normalizados por formatos.   

    .tarjeta.bg-degrade-azul.p-3.mb-5.py-md-4(data-aos="fade-down")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-2
          img.centrar-img(src="@/assets/curso/tema3-1-ico.svg" style="width: 91px;")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.text-white
              p.mb-0 No existe un estándar definido para este tipo de formato, solo se debe cumplir la normatividad establecida, cada empresa implementa su propio formato según sus necesidades. 
            .col-sm-auto.me-md-5.text-blue
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Formato_de_ejemplo.pdf')" target="_blank")
                span.text-blue Ejemplo
                i.fas.fa-file-download.text-blue

    Separador


    #t_3_2
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2. Informe técnico

    p.mb-5(data-aos="fade") Dentro de los informes finales presentados, una vez culminada la etapa implementación, se anexan los documentos técnicos del circuito diseñado, como por ejemplo, los diagramas esquemáticos,  los archivos de fabricación si se hace necesaria para las máquinas de control numérico. Cada informe responde a aspectos específicos, tal como se aprecia en la siguiente figura.

    .titulo-sexto.color-acento-contenido
      p.mb-0 <b>Figura 4</b> Informes técnicos

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-10
        figure
          img(src='@/assets/curso/tema3-2-figura.svg', alt='Informes técnicos')


    .titulo-sexto.color-acento-contenido
      p.f-13.mb-0 Generación de archivos GERBER, captura de pantalla de Altium

    .row.justify-content-center.mb-4
      .col-md-6.mb-4.mb-md-0(data-aos="fade-right")
        img.mb-3(src='@/assets/curso/tema3-2-img.png' alt='Gestión de documentos')
      .col-md-6(data-aos="fade-left")
        p Como parte de la documentación también se incluyen los documentos digitales, entre ellos los archivos GERBER, utilizados por los fabricantes de circuitos impresos, ya que contienen la información del circuito impreso; el formato GERBER más utilizado es el formato RS-274X.
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-0 La verificación de los circuitos digitales y su posterior documentación es un procedimiento al que se le debe poner especial cuidado, aún si se trata de una implementación simple. Si se trata, por ejemplo, de una implementación para un reporte académico, estos archivos se constituyen en las evidencias a presentar.





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

<style lang="sass"></style>
