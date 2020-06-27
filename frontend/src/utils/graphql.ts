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
