import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link, Redirect } from 'react-router-dom';
import check from './api/check';
import SignIn from './SignIn';

const Home = () => <h2>Home component</h2>;
const Private = () => <h2>Private page</h2>;
const Public = () => <h2>Public page</h2>;

//const SignIn = () => 
//api => fetch
//body-parser -> json()
//redux => isAuthenticated

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { isAuthenticated: false };
    }

    componentDidMount() {
        check(err => this.setState({ isAuthenticated: !err }));
    }

    render() {
        const { isAuthenticated } = this.state;
        return (
            <HashRouter>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/private">Private</Link></li>
                        <li><Link to="/public">Public</Link></li>
                        <li><Link to="/signin">Sign In</Link></li>
                    </ul>
                    <Route exact path="/" component={Home} />
                    <Route path="/public" component={Public} />
                    <Route path="/signin" component={SignIn} />
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

/*
    email: khoaphamtraining@gmail.com

    chu de: Do an NodeJS khoa 11/02/2017
    Ghi day du ho ten, ten do an.
    Upload code len github + link github
    deploy len heroku
    1 video ngan.
*/
