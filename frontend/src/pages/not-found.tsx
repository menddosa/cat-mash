import React from 'react'
import styled from 'styled-components'

export default function NotFound(): JSX.Element {
  return (
    <React.Fragment>
      <Container>
        <Message>40(cat)</Message>
      </Container>
    </React.Fragment>
  )
}

const Container = styled.div`
  position: relative;
`

const Message = styled.span`
  padding: 0;
  margin: 0;
  font-size: 16rem;
  font-weight: bold;
  color: black;
`
