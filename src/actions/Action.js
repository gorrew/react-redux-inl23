export function changeView (event){
    return {
        type: 'CHANGE_VIEW',
        payload: event
    }
}

export function addToCart(event){
    return {
        type: 'ADD_TO_CART',
        payload: event
    }
}

export function formChange(event){
    return {
        type: 'FORM_CHANGE',
        payload: event
    }
}

export function formSubmit(event){
    return {
        type: 'FORM_SUBMIT',
        payload: event
    }
}

export function history(event){
    return {
        type: 'HISTORY',
        payload: event
    }
}

export function removeFromCart(event) {
    return {
        type: 'REMOVE_FROM_CART',
        payload: event
    }
}
