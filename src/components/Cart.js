import React, {Component} from 'react';


export default class Cart extends Component {
    render() {

        let cartList = this.props.state.cart.list;
        return (

            <div className="container">

                <h1>My Cart</h1>
                <ul className="cart-ul">
                    {cartList.map((prod, key) => {

                        return (
                            <div key={key}>
                                <h3>{prod.title}</h3>
                                Antal: {prod.cartAmount} <br/>
                                <button data-id={prod.id} type="button" onClick={this.props.removeFromCart}>Ta bort
                                    produkt
                                </button>
                            </div>
                        )
                    })}
                </ul>
                <div>
                    Totalt: {this.props.state.cart.total} kr
                    Totalt antal produkter: {this.props.state.cart.amountOfProd}
                </div>
            </div>
        )
    }
}