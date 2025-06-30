import { decodeString, encodeString } from "~/utils/helpers";
import AxiosPluginType from "~/utils/types/plugins/AxiosPluginType";

export default ({ $axios, $cookies, redirect }: AxiosPluginType) => {
  $axios.onRequest(config => {
    config.headers.common['x-access-token'] = decodeString($cookies.get('__EAT__'))
  })
  
  $axios.onError(error => {
    if (error.response && error.response.status === 401) {
      $cookies.remove('__EUL__')
      redirect('/login')
    }
  })
}