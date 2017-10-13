

const mainReducer = (state = {
    view: "products",
    history: []
}, action) => {

    let newState = {...state};

    switch (action.type) {
        case 'CHANGE_VIEW':
            newState.history.push({
                type: action.type,
                time: new Date()
            });
            newState = {...newState, view: action.payload.target.id};
            return newState;

        default:
            return newState;
    }

};

export default mainReducer;