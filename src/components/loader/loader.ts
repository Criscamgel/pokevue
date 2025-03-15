import { defineComponent, ref } from 'vue'

//Assets
import pokeball from '@/assets/img/pokeball.png'

export default defineComponent({
  name: 'loaderComponent',
  props: ['show'],
  setup(props) {
    const pokeballImg = ref(pokeball)

    return {
      pokeballImg
    }
  },
})
