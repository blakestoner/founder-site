const initialState = [];

export function postsReducer(state = initialState, action) {
    console.log("postsReducer type: ", action.type);

    switch (action.type) {
        case "GET_POSTS_SUCCESS":
            return action.json.posts;
    }

    return state;
}
