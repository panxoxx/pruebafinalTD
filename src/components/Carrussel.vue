<template>
    <v-carousel class="pt-3 mb-3"
    cycle
    height="300"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <template v-slot:prev="{ on, attrs }">
      <v-btn
        color="success"
        v-bind="attrs"
        v-on="on"
      ><v-icon>mdi-arrow-left-bold-circle</v-icon></v-btn>
    </template>
    <template v-slot:next="{ on, attrs }">
      <v-btn
        color="success"
        v-bind="attrs"
        v-on="on"
      ><v-icon>mdi-arrow-right-bold-circle</v-icon></v-btn>
    </template>
    <v-carousel-item
      v-for="mejorproducto in mejoresproductos"
      :key="mejorproducto.title" class="tamañoimagen" :src="mejorproducto.image"
    >
      
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          
        </v-row>
      
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'carrussel-comp',
    // props: {},
    data: function(){
        return {
            colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ]
        }
    },
    computed: {
      ...mapState(['mejoresproductos'])
    },
    //methods: {}   

    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
     //-- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
.tamañoimagen {
  max-height: 60%;
}
    
</style>