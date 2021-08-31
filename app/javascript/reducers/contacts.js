const initialState = [];

export function contactsReducer(state = initialState, action) {
    console.log('contactsReducer type: ', action.type);

    switch (action.type) {
        case 'GET_CONTACTS_SUCCESS':
            return action.json.contacts;
        case 'ADD_CONTACT_SUCCESS':
            return [...state, action.payload.newContact];
    }

    return state;
}
