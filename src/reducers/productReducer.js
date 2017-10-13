const productReducer = (state = {

    products: [
        {
            title: "Nike Ball 1",
            price: 30,
            image: "https://intersport.se/Root/inRiver%20Resources/148956811343453919.png?preset=180x180",
            amount: 10,
            id: 0
        },
        {
            title: "Nike Ball 2",
            price: 20,
            image: "https://intersport.se/Root/inRiver%20Resources/148717592688470418.png?preset=180x180",
            amount: 10,
            id: 1
        },
        {
            title: "Nike ball 3",
            price: 10,
            image: "https://intersport.se/Root/inRiver%20Resources/148415286414772591.png?preset=180x180",
            amount: 10,
            id: 2
        }
    ],
    history: [],
    cart: {
        list: [],
        total: 0,
        amountOfProd: 0
    },
    newProduct: {
        title: '',
        price: '',
        image: '',
        amount: '',
        id: 0
    }

}, action) => {
    let newState = {...state};

    switch (action.type) {

        case 'ADD_TO_CART':
            newState.history.push({
                type: action.type,
                time: new Date()
            });
            const target = newState.products[action.payload.target.id].id;
            console.log(target);
            let itemExistsInCart = false;
            newState.cart.list.forEach(product => {
                if (product.id === target) {
                    itemExistsInCart = true;
                }
            });

            if (!itemExistsInCart) {
                const newItem = newState.products[action.payload.target.id];
                newState.products[action.payload.target.id].cartAmount = 0;
                newItem.cartAmount++;
                newState.cart.list.push(newItem);
                newState.cart.total += newItem.price;
                newState.cart.amountOfProd++;
                newItem.amount--;
                console.log(newItem)
            } else {
                const newItem = newState.products[action.payload.target.id];
                newItem.cartAmount++;
                newState.cart.total += newItem.price;
                newState.cart.amountOfProd++;
                newItem.amount--;
                console.log(newItem)
            }
            console.log(newState.cart.list);
            return newState;

        case 'REMOVE_FROM_CART':
            newState.history.push({
                type: action.type,
                time: new Date()
            });
            const targetId = action.payload.target.getAttribute('data-id');
            const itemToBeRemoved = newState.products[targetId].id;

            const productCount = newState.products[targetId].cartAmount;
            const productTotalPrice = productCount * newState.products[targetId].price;

            const updatedCart = newState.cart.list.filter(product => product.id !== itemToBeRemoved);
            newState.cart.list = updatedCart;
            newState.cart.amountOfProd -= productCount;
            newState.cart.total -= productTotalPrice;

            newState.products[targetId].amount += productCount;
            console.log(updatedCart);

            return newState;

        case 'FORM_CHANGE':
            console.log(action.payload.target);
            const _target = action.payload.target.value;
            const _targetId = action.payload.target.id;
            if (_targetId === 'price' || _targetId === 'amount') {
                newState.newProduct[_targetId] = Number(_target);
            } else {
                newState.newProduct[_targetId] = _target;
            }
            const newProductId = newState.products[newState.products.length - 1].id + 1;
            newState.newProduct.id = newProductId;
            console.log(newState);
            console.log(newProductId);
            return newState;

        case 'FORM_SUBMIT':

            if (Number(newState.newProduct.price) && Number(newState.newProduct.amount)) {
                newState.history.push({
                    type: action.type,
                    time: new Date()
                });
                newState.products.push(newState.newProduct);
                newState.newProduct = {
                    title: '',
                    price: '',
                    image: '',
                    amount: '',
                    id: 0
                };

                return newState;
            }
            else {
                console.log('Fel format');
                return newState;
            }


        default:
            return newState;
    }
};

export default productReducer;

