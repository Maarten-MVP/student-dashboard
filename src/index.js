import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import EvaluationDataReducer from './store/evaluationData'
import FilteredDataReducer  from './store/filteredData'
import StudentReducer from './store/student'
import StudentFilterReducer from './store/studentFilter'


const store = configureStore({ 
  reducer: {
    evaluationData: EvaluationDataReducer, 
    filteredData: FilteredDataReducer,
    student: StudentReducer,
    studentFilter: StudentFilterReducer,
  },
})




ReactDOM.render(
  <React.StrictMode>

  <Provider store={store}>
    <App />
  </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

