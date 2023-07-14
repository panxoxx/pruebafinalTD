<template>
  <v-app>
   <nav-bar></nav-bar>     

    <v-main  >
      <router-view/>
    </v-main>
    <my-footer></my-footer>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',

  data: () => ({
    //
  }),
  components:{
    'nav-bar':NavBar,
    'my-footer':Footer
  }
};
</script>

<style>
.background-container {
  background-image: url('@/assets/fotoia.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
