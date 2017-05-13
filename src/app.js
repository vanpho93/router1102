import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link } from 'react-router-dom';

const Home = () => <h2>Home component</h2>;
const Contact = () => <h2>Contact component</h2>;
const Product = () => <h2>Product component</h2>;

const App = () => (
    <HashRouter>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/product">Product</Link></li>
            </ul>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/product" component={Product} />
        </div>
    </HashRouter>
);

ReactDOM.render(
    <App />,
    document.getElementById('root')// eslint-disable-line
);

//https://reacttraining.com/react-router/
