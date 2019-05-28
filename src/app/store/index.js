import testReducer, { testEpic } from './test'

const reducers = {
  test: testReducer,
}

const epics = [
  testEpic,
]

export {
  reducers,
  epics,
}
