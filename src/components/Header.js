import React, { Component } from 'react';

export default class Header extends Component {

    render(){
        return(
            <div>
                <button id='products' onClick={this.props.changeView}>Our Products</button>
                <button id='productForm' onClick={this.props.changeView}>Add Product</button>
                <button id='history' onClick={this.props.changeView}>See History</button>
                <button id='cart' onClick={this.props.changeView}>Cart</button>
            </div>
        )
    }
}