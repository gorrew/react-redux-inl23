import {connect} from 'react-redux';
import React, {Component} from 'react';

import Header from './Header.js';
import ProductForm from './ProductForm.js';
import Product from './Product.js';
import Cart from './Cart.js';
import History from './History.js';
import {changeView, addToCart, formChange, formSubmit, history, removeFromCart} from '../actions/Action.js'


class App extends Component {
    render() {
        let state = this.props.mainState;
        return (
            <div>
                <Header changeView={this.props.changeView}/>
                {state.view === "products" ? <Product addToCart={this.props.addToCart} state={this.props.productState}/> : null}
                {state.view === "cart" ? <Cart state={this.props.productState} removeFromCart={this.props.removeFromCart}/> : null}
                {state.view === "productForm" ? <ProductForm formSubmit={this.props.formSubmit} formChange={this.props.formChange} state={this.props.productState}/> : null}
                {state.view === "history" ? <History historyState={this.props.mainState} productState={this.props.productState}/> : null}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        mainState: state.mainReducer,
        productState: state.productReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeView: (event) => {
            dispatch(changeView(event));
        },

        addToCart: (event) => {
            dispatch(addToCart(event));
        },

        removeFromCart: (event) => {
            dispatch(removeFromCart(event));
        },

        formChange: (event) => {
            dispatch(formChange(event));
        },
        history: (event) => {
            dispatch(history(event));
        },

        formSubmit: (event) => {

            dispatch( formSubmit(event));
        }


    };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
