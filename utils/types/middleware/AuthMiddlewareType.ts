import { RouteConfig } from "@nuxt/types/config/router";
import { NuxtCookies } from "cookie-universal-nuxt";

export default interface AuthMiddlewareType {
  $session: any,
  store: any,
  redirect(route: string): any,
  $toast: {
    show(message: string, options: any): any
  },
  route: RouteConfig,
  $cookies: NuxtCookies
}