<template>
  <div>
    <!-- ***** Search Form Area ***** -->
    <div class="dorne-search-form d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div id="closeBtn" class="search-close-btn">
              <i class="pe-7s-close-circle" aria-hidden="true"></i>
            </div>
            <form action="#" method="get">
              <input
                id="search"
                type="search"
                name="caviarSearch"
                placeholder="Search Your Desire Destinations or Events"
              />
              <input type="submit" class="d-none" value="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- ***** Header Area Start ***** -->
    <header id="header" class="header_area">
      <div class="container-fluid h-100">
        <div class="row h-100">
          <div class="col-12 h-100">
            <nav class="h-100 navbar navbar-expand-lg">
              <a class="navbar-brand" href="/">
                <img
                  style="width: 350px"
                  src="img/core-img/logolamabener.png"
                  alt
                />
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#dorneNav"
                aria-controls="dorneNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="fa fa-bars"></span>
              </button>
              <!-- Nav -->
              <div id="dorneNav" class="collapse navbar-collapse">
                <ul id="dorneMenu" class="navbar-nav mr-auto">
                  <li class="nav-item dropdown">
                    <a
                      id="navbarDropdown"
                      class="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Our Services
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <nuxt-link class="dropdown-item" to="/tickets"
                        >Ticketing</nuxt-link
                      >
                      <nuxt-link class="dropdown-item" to="/travelpack"
                        >Tour Packages</nuxt-link
                      >
                      <nuxt-link class="dropdown-item" to="/services"
                        >Photography Exploration</nuxt-link
                      >
                      <nuxt-link class="dropdown-item" to="/services"
                        >Customize Tour</nuxt-link
                      >
                    </div>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      id="navbarDropdown"
                      class="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      About Us
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="index.html">Contact</a>
                      <a class="dropdown-item" href="explore.html">Gallery</a>
                      <a class="dropdown-item" href="listing.html">Testimony</a>
                    </div>
                  </li>
                </ul>
                <!-- Signin btn -->
                <div class="dorne-signin-btn">
                  <nuxt-link to="/login" tag="a">Sign In or Register</nuxt-link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
    <!-- ***** Header Area End ***** -->
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style></style>
