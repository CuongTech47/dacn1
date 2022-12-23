import axios from 'axios'





export default {
    namespaced: true,
    state : {
        jwt : null,
        user : null

    },
    mutations : {
        SET_JWT (state , jwt) {
            state.jwt= jwt
        }
    },
    actions :{
        async signIn ({dispatch},credentials) {
            const res = await axios.post('http://localhost:1337/api/auth/local/register', credentials)
            
            if(res.status === 400) {
                console.log(res.)
            }
            dispatch('attempt',res.data.jwt)
        },
        async attempt ({commit}, jwt) {
           commit('SET_JWT',jwt)

           try {
            const res = axios.get
           } catch (error) {
            
           }

        }
    },
    modules: {}
}