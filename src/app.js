import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link, Redirect } from 'react-router-dom';

const isAuthenticated = false;

const Home = () => <h2>Home component</h2>;
const Private = () => <h2>Private page</h2>;
const Public = () => <h2>Public page</h2>;

const App = () => (
    <HashRouter>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/private">Private</Link></li>
                <li><Link to="/public">Public</Link></li>
            </ul>
            <Route exact path="/" component={Home} />
            <Route path="/public" component={Public} />
            <Route 
                path="/private" 
                render={() => (isAuthenticated ? <Private /> : <Redirect to="/" />)} 
            />
        </div>
    </HashRouter>
);

ReactDOM.render(
    <App />,
    document.getElementById('root')// eslint-disable-line
);

//https://reacttraining.com/react-router/
