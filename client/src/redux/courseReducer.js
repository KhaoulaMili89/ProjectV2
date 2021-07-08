import {
    GET_COURSE_SUCCESS,GET_COURSE_FAIL,ADD_COURSE_FAIL
  } from "../actions/types";
  
  const initState = {
    courses:[],
    errors: null
  };
  
  const courseReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_COURSE_SUCCESS :
     return {...state, courses:payload,errors: null }
     case ADD_COURSE_FAIL:
     case GET_COURSE_FAIL :
     return {...state, errors: payload }
      default:
        return state;
    }
  };
  export default courseReducer;
  