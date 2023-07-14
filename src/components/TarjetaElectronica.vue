<template>
<v-row  class="d-flex justify-center mt-3" >
            <v-col cols="12" sm="6" md="3" my-3 v-for="artelectronico in artelectronicos" :key="artelectronico.id">
   <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      :src="artelectronico.image"
    ></v-img>

    <v-card-title>{{artelectronico.title.slice(0,50)}}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="artelectronico.rating.rate"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

         <div class="grey--text ms-4">
          {{artelectronico.rating.rate}} ({{artelectronico.rating.count}})
        </div>
      </v-row>>

      <div class="ma-3">{{artelectronico.description.slice(0,100)}}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>${{artelectronico.price}}</v-chip>
        
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="add(artelectronico.id)"
      >
        <v-icon mdi-cart > AGREGAR </v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
   </v-col>
        </v-row> 


</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'TarjetaElectronica-comp',
    // props: {},
    data: function(){
        return {
             loading: false,
             selection: 1,
        }
    },
    computed: {
        ...mapState(['artelectronicos'])
    },
    methods: {
        add(id){
           console.log(id) 
        }
        
    }
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