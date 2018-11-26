import { initialState } from './initialState';

//Actions

export const selectGallery = (galleryId) => {
    return { type: 'SELECT_GALLERY', galleryId }
}

export const selectGalleryDetails = (galleriesId) => {
    return { type: 'SELECT_GALLERY_DETAILS', galleriesId }
}

export const selectRiceMill = (riceMillId) => {
    return { type: 'SELECT_RICEMILL', riceMillId }
}

export const login = (userId) => {
    return { type: 'LOGIN', userId }
}

export const sent = (data) => {
    return { type: 'SENT', data }
}

export const storeLogin = (loginData) => {
    return { type: 'STORE_LOGIN_DATA', loginData }
}
export const storeDocument = (documentData) => {
    return { type: 'STORE_DOCUMENT_DATA', documentData }
}

//Reducers

export const ht = (state = initialState, action) => {
    switch (action.type) {
        
        case 'SELECT_GALLERY':
            return { galleryId: action.galleryId };
        case 'SELECT_GALLERY_DETAILS':
            return { galleriesId: action.galleriesId };
        case 'SELECT_RICEMILL':
            return { riceMillId: action.riceMillId };
        case 'LOGIN':
            return { userId: action.userId };
        case 'SENT':
            return {
                ...state,
                data: action.data
            };
        case 'STORE_LOGIN_DATA':
            return {
                ...state,
                loginData: action.loginData
            };
        case 'STORE_DOCUMENT_DATA':
            return {
                ...state,
                documentData: action.documentData
            };
        default:
            return state;
    }
}
