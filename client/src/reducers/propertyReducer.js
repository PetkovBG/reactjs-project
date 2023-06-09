
export const propertyReducer = (state, action) => {

    switch (action.type) {
        case 'PROPERTY_FETCH':
            return {
                ...state,
                property: action.payload.property,
            }
        case "COMMENTS_FETCH":
            return {
                ...state,
                comments: action.payload.comments,
            }
        case "COMMENT_ADD":
        
            return {
                ...state,
                comments: [
                    ...state.comments,
                    {
                        ...action.payload,
                        author: { email: action.userEmail }
                    }
                ],
            }
        default:
            return state
    }
}