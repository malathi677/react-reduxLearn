import BUY_ICECREAM from "./iceCreamActionTypes";
const initialState = {
  noOfIceCreams: 20,
};
const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        noOfIceCreams: state.noOfIceCreams - 1,
      };
    default:
      return state;
  }
};

export default iceCreamReducer;
