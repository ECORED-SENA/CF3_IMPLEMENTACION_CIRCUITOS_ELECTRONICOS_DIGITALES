<template lang="pug">
.banner-principal
  
  .container.degrade.tarjeta
    
    .row.banner-principal__row.tarjeta(
      :style="{'background-image': globalData.fondoBannerPrincipal ? `url(${globalData.fondoBannerPrincipal})` : 'none'}"
    )
      .col-lg-7.col-xxl-5.ps-4.ps-sm-5.py-4.py-sm-5.banner-principal__info
        .banner-principal__componente
          h1.mb-0(v-html="globalData.componenteFormativo")
        .banner-principal__descripcion
          p.mb-0(v-html="globalData.descripcionCurso")
        .banner-principal__accion
          router-link.boton(:to="{name: iniciarLnk.nombreRuta }")
            span.me-1 Ver más
            i.fas.fa-angle-right

      .d-none.d-lg-block.col-lg-5.px-0.banner-principal__img
        .contenedor-imagenes
          img.imagen_banner(:src="globalData.imagenBannerPrincipal")
          .imagen_flotante: img(src="@/assets/curso/banner1.svg")
          .imagen_rotada: img(src="@/assets/curso/banner2.svg")
          
</template>

<script>
import mixins from '../components/plantillaMixins'
export default {
  name: 'BannerPrincipal',
  mixins: [mixins],
  computed: {
    globalData() {
      return this.$config.global
    },
  },
}
</script>

<style lang="sass">
.banner-principal__row
  background-size: cover
  background-position: center
.banner-principal .degrade
  background: linear-gradient(-45deg, #2DF0DA, #45C6E5, #2DF0DA)
  background-size: 200% 200% !important
  animation: gradient 6s ease infinite
  animation-direction: alternate
@keyframes gradient
  0%
		background-position: 0% 50%
  50%
    background-position: 100% 50%
  100%
    background-position: 0% 50%


.imagen_banner
  width: 350px
  margin: 0 auto

.banner-principal
  p, h1, h2, h3, h4, h5, h6
    color: $color-banner-text

  .tarjeta
    background-color: $color-banner-fondo
    background-size: cover
    background-position: center

  &__info
    display: flex
    flex-direction: column
    justify-content: center

  &__programa
    display: flex
    align-items: center
    margin-bottom: 20px

  &__componente
    margin-bottom: 20px
    h1
      line-height: 1.1em

      @media (max-width: $bp-max-xs)
        font-size: 2em

  &__descripcion
    margin-bottom: 20px

  &__row
    @if $banner-principal-img-x == 'derecha'
      justify-content: space-between
    @else
      justify-content: space-around
      .banner-principal__img
        padding-right: 1.5rem!important
      @media (min-width: $bp-min-sm)
        .banner-principal__img
          padding-right: 3rem!important

  &__img
    @if $banner-principal-img-y == 'arriba'
      align-self: flex-start
      padding-bottom: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-bottom: 3rem!important
    @else if $banner-principal-img-y == 'abajo'
      align-self: flex-end
      padding-top: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-top: 3rem!important
    @else
      align-self: center
      padding-top: 1.5rem
      padding-bottom: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-top: 3rem!important
        padding-bottom: 3rem!important
.contenedor-imagenes
  position: relative

.imagen_flotante
  animation: float 7s ease-in-out infinite
  position: absolute
  top: 60%
  left: -8%
  width: 250px
  @media screen and (min-width: 1395px)
    left: -2%
@keyframes float
	0%
  	transform: translatey(0px)
	50%
		transform: translatey(-20px)
	100%
		transform: translatey(s0px)

.imagen_rotada
  animation: rotate 4s linear infinite
  position: absolute
  top: 74%
  left: 54.6%
  width: 60px
  @media screen and (min-width: 1395px)
    left: 54.3%
@keyframes rotate
	0%
    transform: rotate(360deg)
</style>
