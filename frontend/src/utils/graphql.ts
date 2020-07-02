import { gql } from 'apollo-boost'

export const GET_RANDOM_BATTLE = gql`
  {
    getRandomBattle {
      first {
        id
        image
      }
      second {
        id
        image
      }
    }
  }
`

export const CREATE_VOTE = gql`
  mutation createVote($winner: Int!, $loser: Int!) {
    createVote(winner: $winner, loser: $loser) {
      id
      winner {
        id
      }
      loser {
        id
      }
    }
  }
`

export const RANKING = gql`
  query ranking($page: Int) {
    ranking(page: $page) {
      edges {
        node {
          id
          image
          elo
          winRate
          wins
        }
        cursor
      }
      pageInfo {
        currentPage
        hasNextPage
      }
    }
  }
`
