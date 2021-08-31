export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';

export function getPosts() {
    console.log('getPosts() Action!!');

    return (dispatch) => {
        dispatch({ type: GET_POSTS_REQUEST });

        return fetch(`posts`)
            .then((response) => response.json())
            .then((json) => dispatch(getPostsSuccess(json)))
            .catch((error) => console.error(error));
    };
}

export function getPostsSuccess(json) {
    return {
        type: GET_POSTS_SUCCESS,
        json,
    };
}
