export const GET_CONTACTS_REQUEST = 'GET_CONTACTS_REQUEST';
export const GET_CONTACTS_SUCCESS = 'GET_CONTACTS_SUCCESS';
export const ADD_CONTACT_REQUEST = 'ADD_CONTACT_REQUEST';
export const ADD_CONTACT_SUCCESS = 'ADD_CONTACT_SUCCESS';

export function getContacts() {
    console.log('getContacts() Action!!');

    return (dispatch) => {
        dispatch({ type: GET_CONTACTS_REQUEST });

        return fetch(`contacts`)
            .then((response) => response.json())
            .then((json) => dispatch(getContactsSuccess(json)))
            .catch((error) => console.error(error));
    };
}

export function getContactsSuccess(json) {
    return {
        type: GET_CONTACTS_SUCCESS,
        json,
    };
}

export function addNewContact(contact) {
    console.log('addNewContact() Action!!');

    const headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    };

    return (dispatch) => {
        dispatch({ type: ADD_CONTACT_REQUEST });

        return fetch(`contacts`, {
            method: 'POST',
            headers,
            body: JSON.stringify(contact),
        })
            .then(() => dispatch(addNewContactSuccess(contact)))
            .catch((error) => console.error(error));
    };
}

export function addNewContactSuccess(newContact) {
    return {
        type: ADD_CONTACT_SUCCESS,
        payload: {
            newContact,
        },
    };
}
