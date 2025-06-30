import { actionTree, mutationTree } from 'typed-vuex'

export const state = () => ({})
export const getters = {}
export const mutations = mutationTree(state, {})

export const actions = actionTree(
  { state, getters, mutations },
  {
    async nuxtServerInit(store, context) {
      // TODO: Make something here
    }
  }
)