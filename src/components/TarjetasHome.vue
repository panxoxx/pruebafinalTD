<template>
    <v-container>
        <v-row  class="d-flex justify-center mt-3" >
            <v-col cols="12" sm="6" md="3" my-3 v-for="tipoproducto in tiposproductos" :key="tipoproducto.name">
                <v-card 
    class="mx-auto"
    max-width="344"
    
  >
    <v-img
      :src="tipoproducto.image"
      height="200px"
    ></v-img>

    <v-card-title class="d-flex justify-center">
      {{tipoproducto.name}}
    </v-card-title>

    <!-- <v-card-subtitle>
      1,000 miles of wonder
    </v-card-subtitle> -->

    <v-card-actions>
      <!-- <v-btn
        color="orange lighten-2"
        text
      >
        Explore
      </v-btn> -->

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{tipoproducto.text.slice(0,50)}}.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
            </v-col>
        </v-row>     
         


    </v-container>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'TarjetaHome-comp',
    // props: {},
    data: function(){
        return {
             show: false,
        }
        },    
     computed: {
        ...mapState(['tiposproductos'])
     },
    //methods: {}
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>