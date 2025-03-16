import { defineStore } from 'pinia'
import api from '@/services/api'
import { useLoaderStore } from './loader'

const { _changeShow } = useLoaderStore()

export const usePokemonsStore = defineStore('pokemons', {

  state: () => ({
    pokemonsList: [] as any[]
  }),

  actions: {
    async _getList() {
      _changeShow(true)
      try {
        const { data } = await api.get('/pokemon')
        this.pokemonsList = data?.results
      } catch (error) {
        
      } finally {
        _changeShow(false)
      }
    }
  }
})
