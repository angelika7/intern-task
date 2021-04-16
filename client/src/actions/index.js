import { GET_TESTS, GET_TESTS_SUCCESS, GET_TEST, GET_TEST_SUCCESS, GET_TEST_FAILURE, SUM_SCORE, GET_FEEDBACK, GET_FEEDBACK_SUCCESS, GET_FEEDBACK_FAILURE } from "./constants.js";

export const getTests = () => ({
  type: GET_TESTS,
});

export const getTestsSuccess = (data) => ({
  type: GET_TESTS_SUCCESS,
  payload: data
});

export const getTestFailure = (err) => ({
  type: GET_TEST_FAILURE,
  err,
})

export const getTest = (id) => ({
  type: GET_TEST,
  payload: id,
});

export const getTestSuccess = (data) => ({
  type: GET_TEST_SUCCESS,
  payload: data,
});

/* export const sumFunc = (score) => ({
  //let score = null;
    const inputs = [...document.querySelectorAll('input[type=radio]:checked')];
    console.log(inputs)
    if(inputs.length > 0 && inputs.length === test.questions.length) {
      inputs.forEach(input => {
        score += input.attributes.value.value * 1;
      })
      //return score
    } else {
      alert('Please answer all questions');
    }
});  */

/* export const sumScoreMiddleware = store => next => action => {
  if(action.type === SUM_SCORE) {
    let allScore = null;
    if(inputs.length > 0 && inputs.length === questions.length) { 
      inputs.map(input => {
        return allScore += input.attributes.value.value * 1
      }) 
      console.log(inputs, allScore)
      return allScore;
     }  else {
      alert('Please answer all questions');
    } 
    
    next(action)
  }
} */



export const sumFunc = (inputs, questions) => {
  let score = null;
  if(inputs.length > 0 && inputs.length === questions.length) {
    inputs.map(input => {
      return score += input.attributes.value.value * 1;
    })
    return score
    
  } else {
    alert('Please answer all questions');
  } 

  return {
    type: SUM_SCORE,
    payload: score
  };
} 

export const getFeedback = (id, score) => ({
  type: GET_FEEDBACK,
  payload: id,
  payload: score,
});

export const getFeedbackFailure = (err) => ({
  type: GET_FEEDBACK_FAILURE,
  err,
})

export const getFeedbackSuccess = (data) => ({
  type: GET_FEEDBACK_SUCCESS,
  payload: data,
});
