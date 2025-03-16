import { defineStore } from 'pinia'

export const useLoaderStore = defineStore('loader', {
  state: () => ({
    loaderShow: false as boolean
  }),

  actions: {
    async _changeShow(bool: boolean, time?:number) {
      this.loaderShow = !bool
      setInterval(() => {
        this.loaderShow = bool
      }, time ?? 2000);
    }
  }
})
