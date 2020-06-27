import React from 'react'
import { Row, Col, Text } from '@zeit-ui/react'

export default function Header(): JSX.Element {
  return (
    <Row gap={0.8} justify="center" style={{ textAlign: 'center', marginBottom: '15px' }}>
      <Col span={16}>
        <Text h1>Cat Mash</Text>
      </Col>
    </Row>
  )
}
