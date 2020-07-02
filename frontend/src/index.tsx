import { ZeitProvider, CssBaseline } from '@zeit-ui/react'
import { ApolloProvider } from '@apollo/react-hooks'
import React, { Fragment } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import NotFound from './pages/not-found'
import { client } from './utils/apollo'
import Ranking from './pages/ranking'

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/ranking" component={Ranking} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  )
}

render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ZeitProvider>
        <CssBaseline />
        <App />
      </ZeitProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.querySelector('#root')
)
