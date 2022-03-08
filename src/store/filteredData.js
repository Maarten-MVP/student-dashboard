import { createSlice } from "@reduxjs/toolkit"
import database from "../database/database"

export const FilteredDataSlice = createSlice({
    name: "FilteredData",
    initialState: [],
    reducers: {
        add: (state, action) => {
            const addition = database.filter(item => {
                    if(item.assignment.includes(action.payload)) {
                        return item
                    }
                })
            return state.concat(addition)
        },
        subtract: (state, action) => {
            const subtraction = database.filter(item => {
                if(item.assignment.includes(action.payload)) {
                    return item
                }
            })
            const mapped = subtraction.map(element => element.id)
            return state.filter(item => !mapped.includes(item.id) )
        },
        filterOnStudent: (state, action) => {
            const filteredOnStudent = state.filter(item => console.log(action.payload) )
            return state = filteredOnStudent
        }
    }
})

export const { add, subtract, filterOnStudent } = FilteredDataSlice.actions
export default FilteredDataSlice.reducer