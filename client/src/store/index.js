import { createStore } from 'vuex'
import axios from "axios"
export default createStore({
  state: {
    categories: [],
  },
  getters : {
    getCategories : (state) => state.categories
  },
  actions: {
    async fetchCategories({ commit }) {
      try {
        const data = await axios.get(
          "http://localhost:1337/api/categories"
        );
        commit("SET_CATEGORIES", data.data);
      } catch (error) {
        alert(error)
        console.log(error)
      }
    }
  },
  mutations: {
    SET_CATEGORIES(state , categories) {
      state.categories = categories
    }
  },
  modules: {}
})
