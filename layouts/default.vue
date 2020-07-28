<template>
  <div>
    <client-only>
      <navbar />
    </client-only>
    <nuxt />
    <client-only>
      <footer />
    </client-only>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>
