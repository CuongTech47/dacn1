import axios from 'axios'





export default {
    namespaced: true,
    state : {
        jwt : null,
        user : null

    },
    getters:{
        authenticated(state) {
            return state.jwt && state.user
        },
        user(state) {
            return state.user
        }
    },
    mutations : {
        SET_JWT (state , jwt) {
            state.jwt= jwt
        },
        SET_USER (state , data) {
            state.user= data
        }
    },
    actions :{
        async signIn ({dispatch},credentials) {
            const res = await axios.post('http://localhost:1337/api/auth/local', credentials)
            
            dispatch('attempt',res.data.jwt)
        },
        async attempt ({commit}, jwt) {
           commit('SET_JWT',jwt)
           try {
            let res = await axios.get("http://localhost:1337/api/users/me", {
                headers: {
                    'Authorization' :'Bearer' + ' ' + jwt
                }
            })
            commit('SET_USER', res.data )
           } catch (e) {
            commit('SET_JWT', null)
            commit('SET_USER', null)
           }

        }
    },
    modules: {}
}