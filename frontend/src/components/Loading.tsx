import React from 'react'
import { Row, Loading as ZLoading } from '@zeit-ui/react'

export default function Loading(): JSX.Element {
  return (
    <Row style={{ padding: '10px 0' }}>
      <ZLoading size="large" />
    </Row>
  )
}
