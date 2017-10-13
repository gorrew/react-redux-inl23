
import React, { Component } from 'react';


export default class ProductForm extends Component {
    render(){
        return(
            <div className="container">

                <h1>Product Form</h1>
                <form>
                    <input value={this.props.state.newProduct.title} id='title' type='text' placeholder='Produkt namn' onChange={this.props.formChange}/>
                    <input value={this.props.state.newProduct.amount} id='amount' type='text' placeholder='Antal Prod' onChange={this.props.formChange}/>
                    <input value={this.props.state.newProduct.image} id='image' type='text' placeholder='Bild länk' onChange={this.props.formChange}/>
                    <input value={this.props.state.newProduct.price} id='price' type='text' placeholder='Pris' onChange={this.props.formChange}/>
                    <button type='button' onClick={this.props.formSubmit}>Lägg till Produkt</button>
                </form>
            </div>
        )
    }
}