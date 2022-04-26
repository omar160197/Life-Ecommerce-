import { createSlice } from "@reduxjs/toolkit"
const authProductSlice = createSlice({
    name: "auth",
    initialState: {isLoggedIn:false},
    reducers: {
        logIn: (state) => {
            state.isLoggedIn=true
        },
        logOut: (state) => {
            state.isLoggedIn=false
        }
    }
})
export default authProductSlice.reducer;

export const { logIn, logOut }=authProductSlice.actions