import React, { Component } from 'react';
import dangNhap from './api/dangNhap';

export default class SignIn extends Component {
    onSubmit(e) {
        e.preventDefault();
        const { txtPassword, txtUsername } = this.refs;
        dangNhap(txtUsername.value, txtPassword.value)
        .then(isOk => console.log(isOk));
    }

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <input type="text" placeholder="Enter your name" ref="txtUsername" />
                <br /><br />
                <input type="password" placeholder="Enter your password" ref="txtPassword" />
                <br /><br />
                <button>Sign In</button>
            </form>
        );
    }
}

