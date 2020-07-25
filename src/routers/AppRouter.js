import React from 'react';
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import App from '../components/App'
import SearchFood from '../components/SearchFood'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'
import EditMealPage from '../components/EditMealPage'

const history = createBrowserHistory()

const AppRouter = () => (
    <Router history={history}>
        <Header />
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/search' component={SearchFood} />
            <Route path='/edit/:uuid' component={EditMealPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </Router>
)

export default AppRouter;