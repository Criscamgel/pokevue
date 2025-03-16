import { defineComponent, ref, onMounted } from 'vue'
import { usePokemonsStore } from '@/stores/pokemons'

import loaderComponent from '@/components/loader/loader.vue'

//Assets
import pikachu from '@/assets/img/pikachu.png'

export default defineComponent({
  name: 'pokedeskView',
  components: {
    loaderComponent
  },
  setup() {
    const pikachuImg = ref(pikachu)

    const { _getList } = usePokemonsStore()
    onMounted(() => {
      _getList()
    })

    return {
      pikachuImg,
    }
  },
})
