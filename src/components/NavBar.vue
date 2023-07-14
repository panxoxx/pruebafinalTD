<template>
 <div>
    <v-app-bar
      color="teal lighten-1"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>DeTodito</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-badge :content="cartCount" class="ma-2" :value="cartCount>0">
            <v-icon @click="redirectTo('/carro')">mdi-cart</v-icon>
        </v-badge>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      color = "teal lighten-1"
      
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item v-for="route in routes" :key="route.name" :to="route.path" :disabled="currentRoute == route.path">
            <v-list-item-icon>
              <v-icon>{{route.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{route.title}}</v-list-item-title>
          </v-list-item>

          
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
 </div>
</template>

<script>
export default {
    name: 'nav-bar',
    // props: {},
    data: function(){
        return {
            drawer: false,
            group: null,
            routes:[
                {
                    icon:'mdi-home',
                    title:"Inicio",
                    path:'/'
                },

                {
                    icon:'mdi-laptop',
                    title:"Electronics",
                    path:'/electronica'
                },
                {
                    icon:'mdi-gender-male',
                    title:"Men´s Clothing",
                    path:'/ropahombre'
                },
                {
                    icon:'mdi-gender-female',
                    title:"Women´s Clothing",
                    path:'/ropamujer'
                },

                 {
                    icon:'mdi-cart',
                    title:"Cart",
                    path:'/carro'
                },
                  {
                    icon:'mdi-account',
                    title:"Acerca",
                    path:'/about'
                },

            ]
        }
    },
    computed: {
      currentRoute(){
        return this.$route.path
      }
    },
    methods: {
        redirectTo(pathRoute){
            this.$router.push({path:pathRoute})
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