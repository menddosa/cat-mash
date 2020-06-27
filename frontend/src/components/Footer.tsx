import React from 'react'
import { Row, Col, Text } from '@zeit-ui/react'

export default function Footer(): JSX.Element {
  return (
    <Row gap={0.8} justify="center" style={{ textAlign: 'center', marginBottom: '15px' }}>
      <Col span={16}>
        <Text small>Made with ⌨️ by Jawad HASSANI</Text>
      </Col>
    </Row>
  )
}
