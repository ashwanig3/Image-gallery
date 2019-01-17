export function storeImage(data) {
    return {
        type: 'STORE_IMAGE',
        data
    }
}

export function updateImg(img) {
    return {
        type: 'UPDATE_IMG',
        img
    }
}