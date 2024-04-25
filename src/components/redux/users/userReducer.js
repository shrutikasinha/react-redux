import { FETCH_USER_ACCESS, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from "./userTypes"

const initialState = {
    loading: false,
  data: [],
  error: "",
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_ACCESS: return {
            ...state,
            loading: true,
        }
        case FETCH_USER_SUCCESS: return {
            ...state,
            loading: false,
            data: action.payload
        }
        case FETCH_USER_FAILURE: return {
            ...state,
            loading: false,
            error: action.payload
        }
        default: return state
}
}

export default userReducer