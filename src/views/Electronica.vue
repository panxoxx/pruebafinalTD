<template>
    <v-container>
        <card-electronica></card-electronica>
    </v-container>
</template>

<script>
import TarjetaElectronica from '@/components/TarjetaElectronica.vue'
import { mapActions } from 'vuex'

export default {
    name: 'electronica-view',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    methods: {
        ...mapActions(['GetElectronica'])
    },
    // watch: {},
    components: {
       'card-electronica': TarjetaElectronica
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    created(){
        this.GetElectronica()
    }
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>