import { getterTree, mutationTree, actionTree } from 'typed-vuex'
import { serialize } from 'object-to-formdata'
import { UserRegister, LoginCredentials } from '~/utils/interfaces/user_interface'
import { decodeString, encodeString } from '~/utils/helpers'
import UserState from '~/types/store/state/UserState';

export const state = () => ({
  authenticated: false,
  loading: false,
  user: []
})

export const getters = getterTree(state, {

})

export const mutations = mutationTree(state, {
  SET_AUTHENTICATED (state: any, payload: boolean) {
    state.authenticated = payload
  },
  SET_LOADING (state: any, payload: boolean) {
    state.loading = payload
  },
  SET_USER(state: any, payload: any) {
    state.user = payload;
  }
})

export const actions = actionTree(
  { state, getters, mutations },
  {
    /**
     * Action for register new user account
     * @param param0
     * @param user Inputs data
     * @returns Promise
     */
    register({ commit }, user: UserRegister) : Promise<any> {
      return new Promise((resolve, reject) => {
        commit('SET_LOADING', true)
        const formData = serialize(user)

        this.$axios
          .post(`v1/auth/register`, formData)
          .then((res) => resolve(res))
          .catch((err) => reject(err.response))
          .finally(() => commit('SET_LOADING', false))
      })
    },

    /**
     * Connect user with credentials
     * @param param0
     * @param credentials username_or_email and password
     * @returns {Promise}
     */
    login({ commit }, credentials: LoginCredentials) : Promise<any> {
      return new Promise((resolve, reject) => {
        commit('SET_LOADING', true)
        const formData = serialize(credentials)

        this.$axios
          .post('v1/auth/login', formData, {
            headers: {
              'x-access-token': decodeString(this.$cookies.get('__ERT__'))
            }
          })
          .then((res) => {
            if (res.status === 200 && res.data.access_token) {
              const tokens = res.data

              this.$cookies.set('__EAT__', encodeString(tokens.access_token))
              this.$cookies.set('__ERT__', encodeString(tokens.refresh_token))
              this.$cookies.set('__EUL__', encodeString('yes'))

              return resolve({message: 'Vous êtes connecté avec succès', status: 'success'})
            }

            reject({message: 'Une erreur est survenue, réessayez svp !', status: 'error'})
          })
          .catch((err) => {
            this.$cookies.set('__EUL__', encodeString('no'))

            if (err.response && err.response.status === 404) {
              return reject({message: 'Email, Username ou mot de passe incorrect', status: 'error'})
            }

            reject({message: 'Une erreur est survenue, réessayez svp !', status: 'error'})
          })
          .finally(() => commit('SET_LOADING', false))
      })
    },

    /**
     * Check if the user token is valid for change state authenticated
     * @param param0
     */
    async checkExpirationToken({ commit }) {
      return new Promise((resolve, reject) => {
        this.$axios
        .get('v1/user/languages', {
          headers: {
            'x-access-token': decodeString(this.$cookies.get('__EAT__')),
            // 'x-refresh-token'
          }
        })
        .then((res) => {
          if (res.status === 200) {
            commit('SET_AUTHENTICATED', true)
            this.$cookies.set('__EUL__', encodeString('yes'))
          } else {
            commit('SET_AUTHENTICATED', false)
            this.$cookies.set('__EUL__', encodeString('no'))
          }
        })
        .catch((err) => {
          if (err.response && err.response.status === 401) {
            commit('SET_AUTHENTICATED', false)
            this.$cookies.set('__EUL__', encodeString('no'))
          }
        })
      })
    },

    /**
     * Action for sign out user
     * @param param0 
     * @returns {Promise}
     */
    async logout({ commit }) {
      return new Promise((resolve, reject) => {
        commit('SET_LOADING', true)

        const objectResolve = {
          success: true,
          message: 'Vous êtes déconnecté.'
        }

        this.$axios
          .post('v1/auth/logout')
          .then((res) => {
            resolve(objectResolve)
          })
          .catch((err) => {
            if (err.response.status == 401) {
              return resolve(objectResolve)
            }

            reject({
              success: false,
              message: 'Une erreur est survenue.'
            })
          })
          .finally(() => commit('SET_LOADING', false))
      })
    },

    /**
     * get user auth
     * @param param0
     */
    loadUser({ commit }) {
      commit('SET_LOADING', true)

      this.$axios
        .get('v1/user/')
        .then(({ data }) => commit('SET_USER', data))
        .finally(() => commit('SET_LOADING', false))
    }
  }
)
