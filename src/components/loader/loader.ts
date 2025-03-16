import { defineComponent, ref } from 'vue'
//Assets
import pokeball from '@/assets/img/pokeball.svg'

export default defineComponent({
  name: 'loaderComponent',
  props: ['onShow'],
  setup(props) {
    const pokeballImg = ref(pokeball)

    
    return {
      pokeballImg,
      props
    }
  },
})
