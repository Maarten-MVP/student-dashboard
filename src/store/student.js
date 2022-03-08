import { createSlice } from '@reduxjs/toolkit'

export const StudentSlice = createSlice ({
    name: "student",
    initialState: "",
    reducers: {
        addStudent: (state, action) => {
            return state = action.payload
        }
    }
}) 

export const { addStudent } = StudentSlice.actions
export default StudentSlice.reducer