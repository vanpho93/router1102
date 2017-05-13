import React, { Component } from 'react';

export default class Product extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.match.params.name}</h2>
            </div>
        );
    }
}
