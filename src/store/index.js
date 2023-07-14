import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mejoresproductos:[],
    tiposproductos:[],
    artelectronicos:[],
    ropitahombre:[],
    ropitamujer:[],
    cart:[]
  },
  getters: {
  },
  mutations: {
      SET_MEJORESPRODUCTOS(state,mejoresproductos){
      state.mejoresproductos= mejoresproductos
      },

      SET_TIPOSPRODUCTOS(state,tiposproductos){
      state.tiposproductos= tiposproductos
      },

      SET_ARTICULOS(state,artelectronicos){
        state.artelectronicos=artelectronicos
      },

      SET_ROPA_HOMBRE(state,ropitahombre){
        state.ropitahombre=ropitahombre
      },
      SET_ROPA_MUJER(state,ropitamujer){
        state.ropitamujer=ropitamujer
      },

      AGREGARPRODUCTO_CART(state,product){
        let exist = state.cart.some(p=>p.id==product.id)
        if(exist==false){
          state.cart.push(product)
        }
        else{
          state.cart.forEach(p=>{
            if(p.id==product.id){
              p.count+=1;
            }
          })
        }
      
      },
      ELIMINARPRODUCTO_CART(state, idProduct){
        let index = state.cart.findIndex(p=>p.id ==idProduct)
        state.cart.splice(index,1)
      },
      AGREGARUNIDADES_CART(state, idProduct){
        state.cart.forEach(p=>{
          if(p.id==idProduct){
            p.count+=1;
          }
        })
      },
      ELIMINARUNIDADES_CART(state, idProduct){
        state.cart.forEach(p=>{
          if(p.id==idProduct && p.count>1){
            p.count-=1;
          }
        })
      }

  },
  actions: {
    async ObtenerDatos({ commit }) {
      try {
        let response = await fetch(`/home.json`)
        let json = await response.json()
        let mejoresproductos = json.mejoresproductos
        let tiposproductos = json.tiposproductos
        commit('SET_MEJORESPRODUCTOS', mejoresproductos)
        commit('SET_TIPOSPRODUCTOS', tiposproductos)
          }
      catch (error) {
        console.log(error)
      }
    },
  
  async GetElectronica({commit}){
    try{
      let response = await fetch(`/electronica.json`)
      let json = await response.json()
      console.log(json)
      let artelectronicos = json
      commit('SET_ARTICULOS', artelectronicos)
    }
    catch(error){
      console.log(error)
    }
  },

  async GetRopaHombre({commit}){
    try{
      let response = await fetch(`/ropaHombre.json`)
      let json = await response.json()
      console.log(json)
      let ropitahombre = json
      commit('SET_ROPA_HOMBRE', ropitahombre)
    }
    catch(error){
      console.log(error)
    }
  },

  async GetRopaMujer({commit}){
    try{
      let response = await fetch(`/ropaMujer.json`)
      let json = await response.json()
      console.log(json)
      let ropitamujer = json
      commit('SET_ROPA_MUJER', ropitamujer)
    }
    catch(error){
      console.log(error)
    }
  },

  agregarProductoCarro({commit},product){
    commit('AGREGARPRODUCTO_CART',product)
  },
  eliminarProductoCarro({commit},idProduct){
    commit('ELIMINARPRODUCTO_CART',idProduct)
  },
  agregarUnidadCarro({commit},idProduct){
    commit('AGREGARUNIDADES_CART', idProduct)
  },
  eliminarUnidadCarro({commit}, idProduct){
    commit('ELIMINARUNIDADES_CART',idProduct)
  }

  
},

  modules: {
  }
})
