import { serialize } from 'object-to-formdata'
import { getterTree, mutationTree, actionTree } from 'typed-vuex'
import CreateEpisodePayload from '~/types/store/payload/CreateEpisodePayload'
import EpisodeState from '~/types/store/state/EpisodeState'

export const state = () => ({
  episode: {},
  episodes: [],
  news_feed: [],
  loading: false
})

export const getters = getterTree(state, {
  newsFeed: (state) => {
    return state.news_feed
  }
})

export const mutations = mutationTree(state, {
  SET_LOADING(state: EpisodeState, payload: boolean) {
    state.loading = payload
  },
  SET_EPISODE(state: EpisodeState, payload: object) {
    state.episode = payload
  },
  SET_EPISODES_NEWS_FEED(state: EpisodeState, payload: any[]) {
    state.news_feed = payload
  }
})

export const actions = actionTree(
  { state, getters, mutations },
  {
    createEpisode({ commit }, payload: CreateEpisodePayload): Promise<any> {
      return new Promise((resolve, reject) => {
        commit('SET_LOADING', true)

        const inputs = serialize(payload)
        const headers = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
        
        this.$axios
          .post('v1/episode/', inputs, headers)
          .then((res) => resolve(res))
          .catch((err) => reject(err.response))
          .finally(() => commit('SET_LOADING', false))
      })
    },

    getEpisodeById({ commit }, payload: {id: number}): Promise<any> {
      return new Promise((resolve, reject) => {
        commit('SET_LOADING', true)
        
        this.$axios
          .get('v1/episode/?id=' + payload.id.toString())
          .then((res) => {
            commit('SET_EPISODE', res.data)
            resolve(res)
          })
          .catch((err) => reject(err.response))
          .finally(() => commit('SET_LOADING', false))
      })
    },

    /**
     * Load the list of episodes for news feed
     * @param param0 
     * @param payload 
     * @returns {Promise}
     */
    loadEpisodesForNewsFeed({ commit }, payload: {limit: number, page: number} = {limit: 10, page: 0}): Promise<any> {
      return new Promise((resolve, reject) => {
        commit('SET_LOADING', true)
        
        this.$axios
          .get(`v1/feed/?l=${payload.limit.toString()}&p=${payload.page.toString()}`)
          .then((res) => {
            commit('SET_EPISODES_NEWS_FEED', res.data?.result || [])
            resolve(res)
          })
          .catch((err) => reject(err.response))
          .finally(() => commit('SET_LOADING', false))
      })
    }
  }
)