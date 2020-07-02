import React, { useState } from 'react'
import { Text, Grid, Link } from '@zeit-ui/react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { GET_RANDOM_BATTLE, CREATE_VOTE } from '../utils/graphql'
import CatCard from '../components/CatCard'
import AppContainer from '../components/AppContainer'
import { LoadingComponent, ErrorComponent } from '../components/Misc'

export default function Home(): JSX.Element {
  const [winner, setWinner] = useState(null)
  const { loading, error, data, refetch } = useQuery(GET_RANDOM_BATTLE, {
    notifyOnNetworkStatusChange: true,
    onCompleted: () => setWinner(null),
  })
  const [createVote, { loading: mutateLoading }] = useMutation(CREATE_VOTE, {
    onCompleted: ({ createVote }) => {
      const {
        winner: { id },
      } = createVote
      setWinner(id)
      setTimeout(() => refetch(), 5000)
    },
  })

  if (loading) return LoadingComponent
  if (error) return ErrorComponent

  const leftCat = data.getRandomBattle.first
  const rightCat = data.getRandomBattle.second

  return (
    <AppContainer>
      <Grid.Container gap={4} justify="center">
        <Grid xs={12} md={12}>
          <CatCard
            onClick={() =>
              createVote({
                variables: {
                  winner: leftCat.id,
                  loser: rightCat.id,
                },
              })
            }
            data={leftCat}
            loading={mutateLoading}
            winner={winner ? leftCat.id === winner : null}
          />
        </Grid>
        <Grid xs={12} md={12}>
          <CatCard
            onClick={() =>
              createVote({
                variables: {
                  winner: rightCat.id,
                  loser: leftCat.id,
                },
              })
            }
            data={rightCat}
            loading={mutateLoading}
            winner={winner ? rightCat.id === winner : null}
          />
        </Grid>
        {winner && <Text>Thanks for voting, next vote in 5seconds...</Text>}
        <Link href="/ranking" color>
          See ranking
        </Link>
      </Grid.Container>
    </AppContainer>
  )
}
