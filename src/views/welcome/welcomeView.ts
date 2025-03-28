import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

//Assets
import pikachu from '@/assets/img/pikachu.png'

export default defineComponent({
  name: 'welcomeView',
  setup() {
    const pikachuImg = ref(pikachu)
    const router = useRouter()

    return {
      pikachuImg,
      router
    }
  },
})
