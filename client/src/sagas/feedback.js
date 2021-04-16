import axios from 'axios'
import { call, put, takeLatest } from 'redux-saga/effects'

import { GET_FEEDBACK } from "../actions/constants";
import { getFeedbackSuccess, getFeedbackFailure } from '../actions/index'

function* getFeedbackSaga(action) {
    try {
      const resp = yield call(() => axios.post(`/api/tests/feedback/2`, {score: 5}))
      yield put(console.log(resp))
    //   yield put(getFeedbackSuccess(resp))
    } catch (error) {
      yield put(getFeedbackFailure(error))
    }
}

export default [takeLatest(GET_FEEDBACK, getFeedbackSaga)]