import { configureStore, createSlice } from "@reduxjs/toolkit";


const myEcommer = createSlice({
    name: "myreduser",
    initialState: {
        user: []
    },
    reducers: {

        userData(state, action) {
            state.user = [...state.user, action.payload.userid]
            console.log(state.user)
           
        }
    }
})

const store = configureStore({ reducer: myEcommer.reducer });

export default store;

export const actions = myEcommer.actions;
