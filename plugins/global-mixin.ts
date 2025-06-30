import Vue from "vue";
import { mapActions } from 'vuex'
import mixins from 'vue-typed-mixins'
import GlobalMixin from '@/mixins/global'
import { decodeString } from "~/utils/helpers";

Vue.mixin({
  mixins: [GlobalMixin],
  data() {
    return {
      MY_NAME: 'BOLENGE'
    }
  },
  computed: {
  },
  methods: {
    ucFirst(str: string): string {
      return str[0].toUpperCase() + str.substring(1)
    }
  },
})