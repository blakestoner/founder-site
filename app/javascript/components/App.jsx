import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import configureStore from '../configureStore';

const store = configureStore();

export default function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/blog">
                            <Blog />
                        </Route>
                        <Route exact path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </Provider>
        </div>
    );
}
