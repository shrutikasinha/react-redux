import { BUY_ICECREAM } from "./icecreamType";

const initialState = {
  numberOfIcecream: 20,
};

export default function icecreamReducer(state = initialState, action) {
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numberOfIcecream: state.numberOfIcecream - 1
        }
        default: return state
    }
}
