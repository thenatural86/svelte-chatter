import { writable } from 'svelte/store'

function createChitStore() {
  const { subscribe, set, update } = writable([
    {
      id: 1,
      author: 'Kevin Durant',
      handle: '@youknowwhoiam',
      content: 'First Chit',
      likes: 0,
    },
  ])

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
