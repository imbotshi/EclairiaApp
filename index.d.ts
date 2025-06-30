import { accessorType } from "~/services/accessors"
import SessionInterface from '@/utils/interfaces/session_interface'
import SnackbarPlugin from "./types/plugin/SnackbarPlugin"

declare module 'vue/types/vue' {
  interface Vue {
    $accessor: typeof accessorType,
    MY_NAME: string,
    userLoggedIn: boolean,
    $auth: {
      loggedIn: boolean
    },
    $session: SessionInterface,
    ucFirst(str: string): string,
    $snackbar: SnackbarPlugin
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $accessor: typeof accessorType,
    $session: SessionInterface
  }
}
