import { writable } from 'svelte/store'
import { incLike, fetchChits } from '../backend/Api.js'

function createChitStore() {
  const { subscribe, set, update } = writable(fetchChits())

  return {
    subscribe,
    update,
    addNewChit: (newChit) => {
      update((e) => [...e, newChit])
    },
    likeChit: (id) => {
      update((pastChits) => {
        pastChits.map((chit) => {
          if (chit.id == id) chit.likes += 1
        })
        incLike(id)
        return pastChits
      })
    },
    deleteChit: (id) => {
      update((pastChits) => {
        return pastChits.filter((chit) => chit.id !== id)
      })
    },
  }
}

export const ChitStore = createChitStore()
