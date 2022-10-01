import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./styles/global.css"
import { Provider } from 'react-redux/es/exports'
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer} from './reducers/rootReducer'

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const composedEnhancers = composeAlt(applyMiddleware(thunk))

const store = createStore(rootReducer, composedEnhancers)

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <App /> 
    </Provider> 
)
