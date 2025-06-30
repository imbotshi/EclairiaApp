import Vue from "vue"
import { validate as validateEmail } from "email-validator"

export default Vue.extend({
  methods: {
    isEmail(email: string): boolean {
      return validateEmail(email)
    },

    isPhoneNumber(phone: string): boolean {
      if (phone.length <= 15) {
        if (/^\+([1-9]){1}([0-9]){11,}/.test(phone)) {
          return true
        }

        if (phone.length === 10) {
          if (/^0([1-9]){1}([0-9]){8}/.test(phone)) {
            return true;
          }
        }
      }

      return false
    }
  }
})