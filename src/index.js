import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import configureStore from '../src/components/store/store'

const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('app'))