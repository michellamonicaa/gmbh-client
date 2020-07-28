<template>
  <div>
    <!-- Carousel -->
    <div class="container">
      <carousel-3d :controls-visible="true" :autoplay="true">
        <slide :index="0">
          <img src="img/bg-img/IMG-0449.JPG" alt />
        </slide>
        <slide :index="1">
          <img src="img/bg-img/IMG-0097.JPG" alt />
        </slide>
        <slide :index="2">
          <img src="img/bg-img/IMG-0450.JPG" alt />
        </slide>
        <slide :index="3">
          <img src="img/bg-img/IMG-0453.JPG" alt />
        </slide>
        <slide :index="4">
          <img src="img/bg-img/IMG-0173.JPG" alt />
        </slide>
      </carousel-3d>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel'
}
</script>

<style></style>
