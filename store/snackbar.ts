import { getterTree, mutationTree, actionTree } from 'typed-vuex'
import SnackbarPayload from '~/types/store/payload/SnackbarPayload'
import SnackbarState from '~/types/store/state/SnackbarState'

export const state = () => ({
  type: '' as string,
  message: '' as string
})

export const getters = getterTree(state, {
  getType(state: SnackbarState) {
    return state.type
  },

  getMessage(state: SnackbarState) {
    return state.message
  }
})

export const mutations = mutationTree(state, {
  SET_TYPE(state: SnackbarState, payload: SnackbarPayload): void {
    state.type = payload.type
  },
  SET_MESSAGE(state: SnackbarState, payload: SnackbarPayload): void {
    state.message = payload.message
  },
  SET_ALL(state: SnackbarState, payload: SnackbarPayload): void {
    state.type =  payload.type
    state.message =  payload.message
  }
})

export const actions = actionTree(
  { state, getters, mutations },
  {
    updateSnackbarInfos({ commit }, payload: SnackbarPayload) {
      commit('SET_ALL', payload)
    }
  }
)