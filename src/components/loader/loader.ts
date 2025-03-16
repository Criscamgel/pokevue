import { defineComponent, ref } from 'vue'
//Assets
import pokeball from '@/assets/img/pokeball.svg'
//Stores
import { useLoaderStore } from '@/stores/loader'
import { storeToRefs } from 'pinia'

export default defineComponent({
  name: 'loaderComponent',
  setup() {
    const pokeballImg = ref(pokeball)

    const { loaderShow } = storeToRefs(useLoaderStore())

    return {
      pokeballImg,
      loaderShow
    }
  },
})
