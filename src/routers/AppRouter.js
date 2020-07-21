import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import App from '../components/App'
import SearchFood from '../components/SearchFood'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'

const AppRouter = () => (
    <Router>
        <Header />
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/search' component={SearchFood} />
            <Route component={NotFoundPage} />
        </Switch>
    </Router>
)

export default AppRouter;