import { Context } from "@nuxt/types"
import { decodeString, encodeString } from "~/utils/helpers"
import { UserSession } from "~/utils/types/plugins/SessionPluginTypes"

export default (context: Context, inject: any) => {
  context.store.dispatch(`user/checkExpirationToken`, true, { root: true })
  
  const session = {
    loggedIn: decodeString(context.app.$cookies.get('__EUL__')) === 'yes',

    /**
     * Allow to update state loggedIn of user
     * @param state
     */
    setStateSession(state: 'yes' | 'no') : void {
      context.app.$cookies.set('__EUL__', encodeString(state))
    },

    /**
     * Entité d'un utilisateur connecté
     */
    user: null
  }
  
  inject('session', session)
}
