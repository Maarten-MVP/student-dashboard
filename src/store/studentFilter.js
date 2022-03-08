import { createSlice } from '@reduxjs/toolkit'

export const StudentFilterSlice = createSlice ({
    name: "studentFilter",
    initialState: [],
    reducers: {
        addStudentToFilter: (state, action) => {
            return state = [...state, action.payload]
        },
        removeStudentFromFilter: (state, action) => {
            return state.filter(item => item != action.payload)
        }
    }
})

export const { addStudentToFilter, removeStudentFromFilter } = StudentFilterSlice.actions
export default StudentFilterSlice.reducer