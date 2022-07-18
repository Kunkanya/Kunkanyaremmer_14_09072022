import { configureStore } from '@reduxjs/toolkit'
import employeeReducers from '../features/employeeSlice/employeeSlice'


/**
 * @description : Setup Store for redux-toolkit
 */

const store = configureStore({
  reducer: {
    employees : employeeReducers
  },
})

export default store