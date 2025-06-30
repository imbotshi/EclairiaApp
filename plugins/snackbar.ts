import { Context } from "@nuxt/types"
import { Inject } from "@nuxt/types/app";
import SnackbarPayload from "~/types/store/payload/SnackbarPayload";

export default ({ app, store }: Context, inject: Inject) => {
  const snackbar = {
    show(payload: SnackbarPayload): void {
      store.dispatch('snackbar/updateSnackbarInfos', payload)
    }
  }

  inject('snackbar', snackbar)
}