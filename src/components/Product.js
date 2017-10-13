import React, {Component} from 'react';

export default class Product extends Component {
    render() {
        let productsList = this.props.state.products;
        let liList = productsList.map((prod, key) => {

            return (
                <div key={key}>
                    <h3>{prod.title}</h3>
                    <img  width='180' height='180' src={prod.image}/> <br/>
                    Pris: {prod.price}kr <br/>
                    Antal i lager: {prod.amount} <br/>
                    <button id={key} onClick={this.props.addToCart}>Lägg till kundvagn</button>
                </div>
            )
        });
        return (
            <div className="container">
                <h1>Products</h1>
                <ul className="product-ul">
                    {liList}
                </ul>
            </div>
        )
    }
}