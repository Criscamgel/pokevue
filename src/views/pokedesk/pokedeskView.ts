import { defineComponent, ref } from 'vue'

//Assets
import pikachu from '@/assets/img/pikachu.png'

export default defineComponent({
  name: 'pokedeskView',
  setup() {
    const pikachuImg = ref(pikachu)

    return {
      pikachuImg
    }
  },
})
