import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link, Redirect } from 'react-router-dom';
import dangNhap from './api/dangNhap';

const isAuthenticated = false;

const Home = () => <h2>Home component</h2>;
const Private = () => <h2>Private page</h2>;
const Public = () => <h2>Public page</h2>;

//const SignIn = () => 
//api => fetch
//body-parser -> json()
//redux => isAuthenticated

class App extends Component {
    componentDidMount() {
        dangNhap('pho', '123asdfad')
        .then(isOk => console.log(isOk));
    }

    render() {
        return (
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
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')// eslint-disable-line
);

//https://reacttraining.com/react-router/
