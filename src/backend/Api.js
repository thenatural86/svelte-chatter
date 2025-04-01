export function fetchChits() {
  console.log('[b] Fetching all chits')
  return [
    {
      id: 1,
      author: 'Kevin Durant',
      handle: '@youknowwhoiam',
      content: 'First Chit',
      likes: 0,
    },
    {
      id: 2,
      author: 'Lebron James',
      handle: '@theking',
      content: 'Second Chit',
      likes: 0,
    },
  ]
}

export function incLike(id) {
  console.log('[b] incrementing likes')
}
