<template>
  <div>
    <!-- ***** Welcome Area Start ***** -->
    <section class="dorne-welcome-area bg-img bg-overlay">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators mb-auto">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
          <!-- Slide One - Set the background image for this slide in the line below -->
          <div
            class="carousel-item active"
            style="background-image: url('/img/bg-img/slider1home.jpeg')"
          >
            <div class="carousel-caption d-none d-md-block">
              <h2 class="display-4 text-white font-weight-bold">
                CEO Travel GmbH
              </h2>
              <p class="lead text-white font-weight-bold">
                Discover the Beautiful World
              </p>
            </div>
          </div>
          <!-- Slide Two - Set the background image for this slide in the line below -->
          <div
            class="carousel-item"
            style="background-image: url('/img/bg-img/slider2home.jpeg')"
          >
            <div class="carousel-caption d-none d-md-block">
              <h2 class="display-4 text-white font-weight-bold">
                CEO Travel GmbH
              </h2>
              <p class="lead text-white font-weight-bold">
                Discover the Beautiful World
              </p>
            </div>
          </div>
          <!-- Slide Three - Set the background image for this slide in the line below -->
          <div
            class="carousel-item"
            style="background-image: url('/img/bg-img/slider3home.jpeg')"
          >
            <div class="carousel-caption d-none d-md-block">
              <h2 class="display-4 text-white font-weight-bold">
                Discover the Beautiful World
              </h2>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </section>
    <!-- ***** Welcome Area End ***** -->

    <!-- ***** Catagory Area Start ***** -->
    <section class="dorne-catagory-area">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="all-catagories">
              <div class="row">
                <!-- Single Catagory Area Brava -->
                <div class="col-4 col-sm-6 col-md">
                  <div
                    class="single-catagory-area wow fadeInUpBig"
                    data-wow-delay="0.2s"
                  >
                    <div class="catagory-content">
                      <!-- <a href="#">
                        <h5 class="text-dark py-2">Brava</h5>
                      </a> -->
                      <nuxt-link class="category-content" to="/brava"
                        >Bavarian</nuxt-link
                      >
                      <img src="img/bg-img/photo3.jpeg" alt />
                    </div>
                  </div>
                </div>
                <!-- Single Catagory Area Scandinavian-->
                <div class="col-4 col-sm-6 col-md">
                  <div
                    class="single-catagory-area wow fadeInUpBig"
                    data-wow-delay="0.4s"
                  >
                    <div class="catagory-content">
                      <a href="#">
                        <h5 class="text-dark py-2 top-left">Scandinavian</h5>
                      </a>
                      <img src="img/bg-img/photo5.jpeg" alt />
                    </div>
                  </div>
                </div>
                <!-- Single Catagory Area Health-->
                <div class="col-4 col-sm-6 col-md">
                  <div
                    class="single-catagory-area wow fadeInUpBig"
                    data-wow-delay="0.6s"
                  >
                    <div class="catagory-content">
                      <a href="#">
                        <h5 class="text-dark py-2">Customize your dream!</h5>
                      </a>
                      <img src="img/bg-img/photo7.jpeg" alt />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ***** Catagory Area End ***** -->

    <!-- ***** About Area Start ***** -->
    <section class="dorne-about-area section-padding-0-100">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="about-content text-center">
              <h2>
                Discover the beautiful world with
                <br />
                <span>CEO Travel GmbH</span>
              </h2>
              <p>
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Fusce quis tempus elit. Sed
                efficitur tortor neque, vitae aliquet urna varius sit amet. Ut
                rhoncus, nunc nec tincidunt volutpat, ex libero.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ***** About Area End ***** -->

    <!-- ***** Clients Area Start ***** -->
    <div class="dorne-clients-area section-padding-100">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div
              class="clients-logo d-md-flex align-items-center justify-content-around"
            >
              <img src="img/clients-img/1.png" alt />
              <img src="img/clients-img/2.png" alt />
              <img src="img/clients-img/3.png" alt />
              <img src="img/clients-img/4.png" alt />
              <img src="img/clients-img/5.png" alt />
              <!-- <p v-for="item in posts" :key="item.id">
                title: {{ item.title }} body: {{ item.body }}
              </p>
              <button @click="getPosts()">y</button>-->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ***** Clients Area End ***** -->
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     posts: {}
  //   }
  // },
  // methods: {
  //   getPosts() {
  //     this.$axios
  //       .get('https://jsonplaceholder.typicode.com/posts')
  //       .then((response) => {
  //         this.posts = response.data
  //       })
  //   }
  // }
}
</script>

<style scoped>
.carousel-item {
  height: 60vh;
  min-height: 350px;
  background: no-repeat center center scroll;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
