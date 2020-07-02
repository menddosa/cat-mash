import React from 'react'
import { Row, Card, Col, Image, Spacer, Text } from '@zeit-ui/react'
import { Cat } from '../utils/types'
import Tag from './Tag'

type RankingCardProps = {
  node: Cat
}

export default function RankingCard(props: RankingCardProps): JSX.Element {
  const { node } = props
  return (
    <Card shadow style={{ marginBottom: 20 }}>
      <Row style={{ marginBottom: '15px' }}>
        <Col>
          <Image style={{ objectFit: 'cover' }} width={350} height={200} src={node.image} />
        </Col>
        <Spacer x={5} />
        <Col>
          <Text style={{ margin: 0 }}>{`Elo: ${node.elo}`}</Text>
          <Row align="middle">
            <Text style={{ margin: 0 }}>Win rate:</Text>
            <Spacer x={0.5} />
            <Tag value={node.winRate} percentage />
          </Row>
          <Row align="middle">
            <Text style={{ margin: 0 }}>Wins:</Text>
            <Spacer x={0.5} />
            <Tag value={node.wins} />
          </Row>
        </Col>
      </Row>
    </Card>
  )
}
