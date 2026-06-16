import { configureStore, createSlice } from "@reduxjs/toolkit";



const comData = createSlice({

    name: "myreducer",
    initialState: {
        alldata: {

            udata: [],

            sdata: [],

            addata: []
        },

        // allsearch: {

        //     usdta: [],

        //     ssdata: [],

        //     asdata: []
        // }




    },
    reducers: {

        userData(state, action) {

            state.alldata.udata = action.payload;
            console.log(state.alldata.udata)

        },

        storeData(state, action) {

            state.alldata.sdata = action.payload;
            console.log(state.alldata.sdata)

        },

        adminData(state, action) {

            state.alldata.addata = action.payload;
            console.log(state.alldata.addata)

        }
    }


})

const store = configureStore({ reducer: comData.reducer });
export default store;
export const actions = comData.actions;