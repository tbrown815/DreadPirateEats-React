export const loadAuthToken = () => {
    return localStorage.getItem('authToken')
};

export const storeAuthToken = authToken => {
    try {
        localStorage.setItem('authToken', authToken)
    } catch (e) {}
};

export const clearAuthToken = () => {
    try {
        localStorage.removeItem('authToken')
    }catch (e) {}
};



export const loadUserToken = () => {
    return localStorage.getItem('userToken')
};

export const storeUserToken = userToken => {
    try {
        localStorage.setItem('userToken', userToken)
    } catch (e) {}
};

export const clearUserToken = () => {
    try {
        localStorage.removeItem('userToken')
    }catch (e) {}
};