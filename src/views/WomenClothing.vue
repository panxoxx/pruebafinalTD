<template>
    <v-container>
        <card-WomenClothing></card-WomenClothing>
    </v-container>
</template>

<script>
import TarjetaRopaMujer from '@/components/TarjetaRopaMujer.vue'
import { mapActions } from 'vuex'

export default {
    name: 'WomanClothing-view',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    methods: {
        ...mapActions(['GetRopaMujer'])
    },
    // watch: {},
    components: {
       'card-WomenClothing': TarjetaRopaMujer
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    created(){
        this.GetRopaMujer()
    }
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>