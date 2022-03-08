import { createSlice } from "@reduxjs/toolkit"
import database from "../database/database"


export const EvaluationDataSlice = createSlice({
    name: "EvaluationData",
    initialState: database,
    reducers: {}
})

export const {} = EvaluationDataSlice.actions
export default EvaluationDataSlice.reducer