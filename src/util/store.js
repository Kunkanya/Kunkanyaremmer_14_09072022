import { configureStore } from '@reduxjs/toolkit'
import { addEmployee } from '../features/employeeSlice/employeeSlice'

export const store = configureStore({
  reducer: {
    employee :addEmployee
  },
})