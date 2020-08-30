import * as actionType from '../actions/actionTypes';

const initialState = {
  results: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionType.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({id: new Date(), val: action.result})
      }
    case actionType.DELETE_RESULT:
      const updatedArray = state.results.filter(result => result.id !== action.resultElId);
      return {
        ...state,
        results: updatedArray
      }
    default:
      return state;
  }

}

export default reducer;
