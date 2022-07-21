import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  employeeLists : [],
}

export const employeeSlice = createSlice({
    name: 'employees',
    initialState : initialState,
    reducers :{
        addEmployee:(state, action) => {
            state.employeeLists.push(action.payload)
            }
     }

})

export const { addEmployee , test } = employeeSlice.actions

export default employeeSlice.reducer