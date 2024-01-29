import { defineStore } from 'pinia';
export const useCityStor = defineStore('city', {
    state : () => ({
        count: 0,

    }),
    getters: {
        // automatically infers the return type as a number
        doubleCount(state) {
          return state.count * 2
        },
        // the return type **must** be explicitly set
      },
  })