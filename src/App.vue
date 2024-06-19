<script setup>
import NavbarComponent from './components/NavbarComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
</script>

<template>
  <NavbarComponent></NavbarComponent>
  <main>
    <HeaderComponent></HeaderComponent>
    <RouterView @setUser="getUser"></RouterView>
  </main>
  <FooterComponent />
</template>

<script>
export default {
  data() {
    return {
      auth_user: false
    }
  },
  
  mounted() {
    this.getUser()
  },

  methods: {
    getUser() {
      this.auth_user = JSON.parse(localStorage.getItem('data_user'))
    }
  }


}

</script>
