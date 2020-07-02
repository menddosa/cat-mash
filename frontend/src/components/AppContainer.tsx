import React from 'react'
import { Page } from '@zeit-ui/react'
import Header from './Header'
import Footer from './Footer'

type AppContainerProps = {
  children: JSX.Element
}

export default function AppContainer(props: AppContainerProps): JSX.Element {
  return (
    <Page render="effect" dotBackdrop>
      <Page.Header>
        <Header />
      </Page.Header>
      <Page.Content>{props.children}</Page.Content>
      <Page.Footer>
        <Footer />
      </Page.Footer>
    </Page>
  )
}
