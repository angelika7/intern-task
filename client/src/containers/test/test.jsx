import React, { useEffect } from "react";
import { connect } from "react-redux";
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from "@material-ui/core/Button";

import { useStyles } from "./styles.js";

import Link from "../../components/link";

import {
  getTest as getTestAction, sumFunc as sumFuncAction, getFeedback as getFeedbackAction
} from "../../actions/index";

const Test = ({test, getTest, match, loading, sumFunc, score, feedback, getFeedback}) => {
  const classes = useStyles();
  
  /* setScore = () => {
    //let score = null;
    const inputs = [...document.querySelectorAll('input[type=radio]:checked')];
    console.log(inputs)
    if(inputs.length > 0 && inputs.length === test.questions.length) {
      inputs.map(input => {
        score += input.attributes.value.value * 1;
      })
      //return score
    } else {
      alert('Please answer all questions');
    }
  } */

  useEffect(() => {
    getTest(match.params.id);
  }, [getTest, match]);

  if (loading) {
    return (
      <div className={classes.progress}>
        <CircularProgress size={60} thickness={5} />
      </div>
    )
  }

  if (!test) {
    return (
      <div className={classes.root}>
        Failed to load a test
      </div>
    )
  }

  console.log("Here's what the test object looks like:", test, test.questions, test.answers )
  const { questions, answers } = test;
  const inputs = [...document.querySelectorAll('input[type=radio]:checked')];
  return (
    <div className={classes.root}>
      <Link to='/'>
        <Button>Back</Button>
      </Link>
      <div className={classes.label}>{test.quizData.title}</div>
      <form>
        <div>
          {questions.map((question, i) => (
            <>
          <div key={i}>{question.label}</div>
          {question.quizQuestionAnswers.map((answer, i) => (
            <div key={i}>
              <input type="radio" id={answer.id} name={question.label} value={answers[answers.findIndex(el => el._id === answer)].value} required="required"     />
              <label htmlFor={answer.id}>{answers[answers.findIndex(el => el._id === answer)].label}</label> 
            </div>
          ))}  
            </>
          ))
          }
        </div>
        {/* <Link to='/feedback/:id'>
          <Button>Submit Answers</Button>
        </Link> */}
        
      </form>
      {/* <button onClick={() => sumFunc(inputs, test.questions)}></button> */}
      <button onClick={() => getFeedback(5)}></button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  test: state.test.test,
  loading: state.test.loading,
  score: state.test.score,
  feedback: state.test.feedback
});

const mapDispatchToProps = (dispatch) => ({
  getTest: (id) => dispatch(getTestAction(id)),
  sumFunc: (inputs, questions) => dispatch(sumFuncAction(inputs, questions)),
  getFeedback: (score) => dispatch(getFeedbackAction(score))
});

export default connect(mapStateToProps, mapDispatchToProps)(Test);
