import React, { useState } from 'react'
import { Page, Text, Grid, Card, Row, Loading, Display, Button, Image } from '@zeit-ui/react'
// import { useTransition, animated } from 'react-spring'
import { useQuery } from '@apollo/react-hooks'
import { GET_RANDOM_BATTLE } from '../utils/graphql'
import Footer from '../components/Footer'
import Header from '../components/Header'
import CatCard from '../components/CatCard'

export default function Home(): JSX.Element {
  const { loading, error, data } = useQuery(GET_RANDOM_BATTLE)

  if (error) {
    return (
      <Page>
        <Text>Something went wrong :/</Text>
      </Page>
    )
  }

  return (
    <Page render="effect" dotBackdrop>
      <Page.Header>
        <Header />
      </Page.Header>
      <Page.Content style={{ backgroundColor: 'white' }}>
        {loading ? (
          <Row style={{ padding: '10px 0' }}>
            <Loading size="large" />
          </Row>
        ) : (
          <Grid.Container gap={4} justify="center">
            <Grid xs={12} md={12}>
              <CatCard data={data.getRandomBattle.first} />
            </Grid>
            <Grid xs={12} md={12}>
              <CatCard data={data.getRandomBattle.second} />
            </Grid>
          </Grid.Container>
        )}
      </Page.Content>
      <Page.Footer>
        <Footer />
      </Page.Footer>
    </Page>
  )
}

// const [toggle, set] = useState(true)
// const transitions = useTransition(toggle, null, {
//   from: { position: 'absolute', opacity: 0 },
//   enter: { opacity: 1 },
//   leave: { opacity: 0 },
// })
// /* {transitions.map(({ item, key, props }) =>
//   item ? (
//     <animated.div style={props}>
//     <div onClick={() => set(!toggle)}>This one (test) 🤔</div>
//     </animated.div>
//     ) : (
//       <animated.div style={props}>
//       <div onClick={() => set(!toggle)}>💕</div>
//       </animated.div>
//       )
//     )} */
