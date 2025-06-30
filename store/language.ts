import { getterTree, mutationTree, actionTree } from 'typed-vuex'
import LanguageState from '~/types/store/state/LanguageState'

export const state = () => ({
  loading: false,
  languages: []
})

export const getters = getterTree(state, {
  listLanguages: (state: any) => {
    return state.languages
  }
})

export const mutations = mutationTree(state, {
  SET_LANGUAGES(state: LanguageState, payload: any[]) {
    state.languages = payload
  },
  SET_LOADING(state: LanguageState, payload: boolean) {
    state.loading = payload
  }
})

export const actions = actionTree(
  { state, getters, mutations },
  {
    load({ commit }) {
      commit('SET_LOADING', true)

      this.$axios
        .get('v1/language/list')
        .then(({ data }) => commit('SET_LANGUAGES', data))
        .finally(() => commit('SET_LOADING', false))
    }
  }
)
