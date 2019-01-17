const initState = {
    images: [],
    imgSrc: [],
    msg : ''
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

        case 'GET_IMAGES' : {
            if(!action.images) {
                return {
                    msg: "No images Available.Please Upload.",
                    imgSrc : []
                }
            } else {
                return {
                    imgSrc: [...action.images]
                }

            }
            
        }
        case 'DELETE_IMG': {
            state.imgSrc.splice(action.id, 1)
            return {
                imgSrc: [...state.imgSrc]
            }
        }
        case 'SEARCH_IMG': {
            const query = action.query;
            const filteredArr = state.imgSrc.filter(img => img.imgInfo.toLowerCase().includes(query))
            return {
                imgSrc: filteredArr
            }
        }
        default:
        return state;
    }
}

