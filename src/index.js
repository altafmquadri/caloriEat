import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from '../src/components/store/store'
import AppRouter from './routers/AppRouter'

const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>, document.getElementById('app'))