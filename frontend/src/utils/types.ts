export type Edge<T> = {
  node: T
  cursor: number
}

export type Cat = {
  id: number
  image: string
  elo: number
  wins: number
  winRate: number
}
