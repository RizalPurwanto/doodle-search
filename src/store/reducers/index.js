const initialState = {
    searches: {},
    images: {},
    news: {},
    bookmarks: [],
    isLoading: true
}

// Use the initialState as a default value
export default function appReducer(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
        case 'setSearch':
            return {
                ...state,
                searches: action.payload
            }

        case 'setImages':
            return {
                ...state,
                images: action.payload
            }

        case 'setNews': 
            return {
                ...state,
                news: action.payload
            }


        case 'setLoading':
            return {
                ...state,
                isLoading: action.payload
            }

        case 'setBookmark':
            const secondBookmark = [...state.bookmarks]
            const duplicate = secondBookmark.find(e => e == action.payload)
            if(duplicate) {
                return {
                    ...state,
                    bookmarks: secondBookmark
                }
            } else {
                return {
                    ...state,
                    bookmarks: [...state.bookmarks, action.payload]
                }
            }
            
        case 'deleteBookmark':
                const newArr = [...state.bookmarks]
                
                console.log(action.payload, "INI NEWARR")
                return {
                    ...state,
                    bookmarks: newArr.filter(e => e !== action.payload )
                }
        // Do something here based on the different types of actions
        default:
            // If this reducer doesn't recognize the action type, or doesn't
            // care about this specific action, return the existing state unchanged
            return state
    }
}