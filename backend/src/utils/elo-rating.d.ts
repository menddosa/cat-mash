// elo-rating.d.ts
declare module 'elo-rating' {
  type CalculateOutput = {
    playerRating: number
    opponentRating: number
  }
  function calculate(
    playerRating: number,
    opponentRating: number,
    playerWin?: boolean,
    k?: number
  ): CalculateOutput
}
