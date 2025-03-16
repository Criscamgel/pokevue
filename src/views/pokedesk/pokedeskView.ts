import { defineComponent, ref, onMounted } from 'vue'
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
    
    const showLoader = ref(true)
    return {
      pikachuImg,
      showLoader
    }
  },
})
