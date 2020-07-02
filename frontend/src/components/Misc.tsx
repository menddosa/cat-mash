import React from 'react'
import { Text, Loading } from '@zeit-ui/react'
import AppContainer from './AppContainer'

export const LoadingComponent = (
  <AppContainer>
    <Loading></Loading>
  </AppContainer>
)

export const ErrorComponent = (
  <AppContainer>
    <Text>Something went wrong :/</Text>
  </AppContainer>
)
