export const REQUEST = '@test/request'
export const SET_DATA = '@test/set-data'
export const SET_ERRORS = '@test/set-errors'

import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/filter'
import { of } from 'rxjs/observable/of'
import { fromPromise } from 'rxjs/observable/fromPromise'
import { push, replace } from 'react-router-redux'
import { destroy } from 'redux-form'

export const initialState = {
  isLoading: false,
  data: '',
  errors: null,
}

export default function reducer(state = initialState, { type, payload = {} }) {
  switch (type) {
    case REQUEST: {
      return {
        isLoading: true,
        errors: null,
      }
    }
    case SET_DATA: {
      return {
        isLoading: false,
        data: payload,
      }
    }
    case SET_ERRORS: {
      return {
        isLoading: false,
        errors: payload.errors,
      }
    }
  }

  return state
}
export function request(payload) {
  return {
    type: REQUEST,
    payload,
  }
}

export function setData(payload) {
  return {
    type: SET_DATA,
    payload,
  }
}

export function setErrors(payload) {
  return {
    type: SET_ERRORS,
    payload,
  }
}

export function firstNameFieldEpic(action$, store, { API }) {
  return action$.ofType("@@redux-form/CHANGE")
    .filter(data => data.meta.field === "firstName")
    .mergeMap(function({ payload, meta }) {
      console.log('firstName onChange was catched by rxjs')
      return of(
        setData(payload),
      )
    })
}

export function submitTestFormEpic(action$, store, { API }) {
  return action$.ofType(REQUEST)
    .mergeMap(function({ payload }) {
      console.log('Form submit was catched by rxjs')
      return of(
        setData(payload),
      )
    })
}

