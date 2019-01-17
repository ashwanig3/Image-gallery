export function storeImage(data) {
    return {
        type: 'STORE_IMAGE',
        data
    }
}

export function updateImg(img) {
    console.log(img)
    return {
        type: 'UPDATE_IMG',
        img
    }
}

export function getAllImages(images) {
    return {
        type : "GET_IMAGES",
        images,
    }
}

export function deleteImg(id) {
    return {
        type: 'DELETE_IMG',
        id
    }
}

export function searchImg(query) {
    return {
        type: 'SEARCH_IMG',
        query
    }
}