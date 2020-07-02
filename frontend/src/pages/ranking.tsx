import React, { useState } from 'react'
import { Text, Grid, Button } from '@zeit-ui/react'
import { useQuery } from '@apollo/react-hooks'
import RankingCard from '../components/RankingCard'
import { Cat, Edge } from '../utils/types'
import { RANKING } from '../utils/graphql'
import AppContainer from '../components/AppContainer'
import { LoadingComponent, ErrorComponent } from '../components/Misc'

export default function Ranking(): JSX.Element {
  const [cats, setCats] = useState([])
  const [page, setPage] = useState(1)
  const [hasNextPage, setHasNextPage] = useState(false)
  const { loading, error, refetch } = useQuery(RANKING, {
    notifyOnNetworkStatusChange: true,
    onCompleted: ({ ranking }) => {
      if (!ranking.edges) return false
      // @ts-ignore
      setCats([...cats, ...ranking.edges])
      setPage(ranking.pageInfo.currentPage)
      setHasNextPage(ranking.pageInfo.hasNextPage)
    },
  })

  if (loading && !cats.length) return LoadingComponent
  if (error) return ErrorComponent

  return (
    <AppContainer>
      <Grid>
        <Text h2>Cutest cats 😍</Text>
        {cats.map((edge: Edge<Cat>) => {
          const { node } = edge
          return <RankingCard key={node.id} node={node} />
        })}
        <Grid.Container gap={2} justify="center">
          <Grid justify="center">
            <Button disabled={!hasNextPage} onClick={() => refetch({ page: page + 1 })}>
              More cutteness
            </Button>
          </Grid>
        </Grid.Container>
      </Grid>
    </AppContainer>
  )
}
