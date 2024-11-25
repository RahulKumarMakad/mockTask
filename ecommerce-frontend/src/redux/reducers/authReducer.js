const initialState = { token: localStorage.getItem('authToken'), error: null };

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTER_SUCCESS':
        case 'LOGIN_SUCCESS':
            return { ...state, token: action.payload };
        case 'REGISTER_FAIL':
        case 'LOGIN_FAIL':
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

export default authReducer;
