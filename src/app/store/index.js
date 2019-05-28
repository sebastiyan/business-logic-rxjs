import testReducer, { firstNameFieldEpic, submitTestFormEpic } from './test'

const reducers = {
  test: testReducer,
}

const epics = [
  firstNameFieldEpic,
  submitTestFormEpic,
]

export {
  reducers,
  epics,
}
