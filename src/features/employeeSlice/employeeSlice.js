import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  employee : []
}

export const employeeSlice = createSlice({
    name: 'employee',
    initialState : initialState,
    reducers :{
        addEmployee:(state, action) => {
            alert(action.payload)
            state.employee.push(action.payload)
            alert("OK")
        
        }
    }

})

export const {addEmployee} = employeeSlice.actions

export default employeeSlice.reducer