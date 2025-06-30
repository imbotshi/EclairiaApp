import { NuxtAxiosInstance } from "@nuxtjs/axios";
import { NuxtCookies } from "cookie-universal-nuxt";

export default interface AxiosPluginType {
  $cookies: NuxtCookies,
  store: any,
  redirect(route: string): any,
  $axios: NuxtAxiosInstance
}