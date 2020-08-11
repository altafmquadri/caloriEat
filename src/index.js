import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from '../src/store/store'
import AppRouter from './routers/AppRouter'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>, document.getElementById('app'))