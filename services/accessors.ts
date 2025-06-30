import { getAccessorType } from 'typed-vuex'
import * as user from '@/store/user'

const initialStore = () => ({
  modules: {
    user
  }
})

export const accessorType = getAccessorType(initialStore())