<template>
   <v-container>
    <v-row>
    <slide-comp></slide-comp>
    </v-row>
    <v-divider color="white">
    </v-divider>
    <h1 class="text-center mt-4 white--text">
      Nuestros Productos
    </h1>

     <v-row>
      <card-home></card-home>
    </v-row>
  </v-container>
</template>

<script>
import Carrussel from '@/components/Carrussel.vue'
import TarjetasHome from '@/components/TarjetasHome.vue'
import {mapActions} from 'vuex'
export default {
    name: 'home-view',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    methods: {
      ...mapActions(['ObtenerDatos'])
    },
    // watch: {},
    components: {
      'slide-comp':Carrussel,
      'card-home' : TarjetasHome
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    created(){this.ObtenerDatos() }
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>