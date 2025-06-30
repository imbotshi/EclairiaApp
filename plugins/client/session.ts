import { Context } from "@nuxt/types"
import { decodeString } from "~/utils/helpers"

export default (context: Context, inject: any) => {
  const session = {
    loggedIn: decodeString(context.app.$cookies.get('__EUL__')) === 'yes'
  }
  
  inject('session', session)
}
