
import { GET_TEST, GET_TEST_SUCCESS, GET_TEST_FAILURE, SUM_SCORE, GET_FEEDBACK, GET_FEEDBACK_SUCCESS, GET_FEEDBACK_FAILURE } from "../actions/constants";

const initialState = {
  test: null,
  loading: false,
  loaded: null,
  score: 0,
  feedback: null,
}

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TEST_SUCCESS:
      return {
        ...state,
        loading: false,
        test: action.payload,
        loaded: true
      };
    case GET_TEST_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false
      }
    case GET_TEST:
      return {
        ...state,
        test: null,
        loading: true,
        loaded: null,
      };
    case SUM_SCORE:
      return {
        ...state,
        score: action.payload
      };
    case GET_FEEDBACK:
      return {
        ...state,
        feedback: null,
        loading: true,
        loaded: null,
      };
    case GET_FEEDBACK_SUCCESS:
      return {
        ...state,
        loading: false,
        feedback: action.payload,
        loaded: true
      };
    case GET_FEEDBACK_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false
      }  
    default:
      return initialState;
  }
};

export default homeReducer;
