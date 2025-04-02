export async function fetchChits() {
  console.log('[b] Fetching all chits')

  const response = await fetch('http://localhost:3000/chits')

  const data = await response.json()
  return data
}

export function incLike(id) {
  console.log('[b] incrementing likes', id)
}
