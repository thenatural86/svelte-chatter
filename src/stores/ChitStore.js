import { writable } from 'svelte/store'

export const ChitStore = writable([
  { id: 1, author: 'Smalls', handle: '@youknowwhoiam', content: 'First Chit' },
  { id: 2, author: 'Nauman', handle: '@recluze', content: 'Second Chit' },
])
