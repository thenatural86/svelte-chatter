import { writable } from 'svelte/store'

// export const ChitStore = writable([
// { id: 1, author: 'Smalls', handle: '@youknowwhoiam', content: 'First Chit' },
// ])

function createChitStore() {
  const { subscribe, set, update } = writable([
    {
      id: 1,
      author: 'Smalls',
      handle: '@youknowwhoiam',
      content: 'First Chit',
    },
  ])

  return {
    subscribe,
    // set,
    update,
    addNewChit: (newChit) => {
      update((e) => [...e, newChit])
    },
  }
}

export const ChitStore = createChitStore()
