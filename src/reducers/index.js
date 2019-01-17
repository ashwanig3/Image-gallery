const initState = {
    images: [],
    imgSrc: [],
}

export default function rootReducer(state= initState, action) {
    switch(action.type) {
        case 'STORE_IMAGE': {
            return {
                ...state,
                images: [...state.images, action.data]
            }
        }
        case 'UPDATE_IMG': {
            return {
                imgSrc: [...state.imgSrc, action.img]
            }
        }
        default:
        return state;
    }
}

