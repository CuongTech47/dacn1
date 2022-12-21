import { createStore } from 'vuex'
import axios from "axios"
export default createStore({
  state: {
    products: [],
    cart:[]
  },
  getters : {
    products : (state) => state.products,
    cart : (state)=>state.cart
  },
  actions: {
    async getProducts({ commit }) {
      try {
        const data = await axios.get(
          "http://localhost:1337/api/products?populate=*"
        );
        console.log(data.data.data)
        commit("getProductData", data.data.data);
      } catch (error) {
        console.log(error)
      }
    },
    addToCart ({ commit } , product ) {
      commit("addProductToCart" , product)
    },
    addQty({commit}, id) {
      commit("addQty",id)
    },
    reduceQty ({commit},id) {
      commit("reduceQty",id)
    },
    removeProduct({commit},id) {
      commit("removeProduct",id)
    }
  },
  mutations: {
    getProductData(state ,products) {
      state.products = products
    },
    addProductToCart(state , product) {
      const addedProduct = state.cart.find(item => item.id === product.id)
      if(addedProduct) {
        addedProduct.qty++
      }else {
        state.cart.push({ ...product,qty : 1})
      }
     
    },
    addQty(state , id) {
      const currentProduct = state.cart.find((item)=>item.id === id)
      currentProduct.qty++
    },
    reduceQty(state , id) {
      const currentProduct = state.cart.find((item)=>item.id === id)
      if(currentProduct.qty > 1){
        currentProduct.qty--
      }else{
        state.cart = state.cart.filter((item)=>item.id !== id)
      }
      
    },
    removeProduct(state , id) {
      state.cart = state.cart.filter((item)=>item.id !== id)

    }
  },
  
  modules: {}
})
