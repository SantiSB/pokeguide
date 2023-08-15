import React from 'react'
import ReactDOM from 'react-dom/client'
import PokeGuide from './PokeGuide.jsx'
import { pokemonsReducer } from './reducers/pokemons'
import { Provider } from 'react-redux'
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from 'redux'
import { logger } from './middlewares'
import thunk from 'redux-thunk'

const root = ReactDOM.createRoot(document.getElementById('root'))

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const composedEnhancers = composeAlt(applyMiddleware(thunk, logger))

const store = createStore(pokemonsReducer, composedEnhancers)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PokeGuide />
    </Provider>
  </React.StrictMode>
)
