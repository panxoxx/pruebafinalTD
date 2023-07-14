<template>
    <v-container>
        <card-MenClothing></card-MenClothing>
    </v-container>
</template>

<script>
import TarjetaRopaHombre from '@/components/TarjetaRopaHombre.vue'
import { mapActions } from 'vuex'


export default {
    name: 'MenClothing-view',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    methods: {
        ...mapActions(['GetRopaHombre'])
    },
    // watch: {},
    components: {
       'card-MenClothing': TarjetaRopaHombre
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    created(){
        this.GetRopaHombre()
    }
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>