import { createSlice } from "@reduxjs/toolkit";

const monyslice = createSlice({

  name: "money",
    initialState: {
        value: 25
    },
    reducers: {
        setMoney: (state, action) => {
            state.value += action.payload;
        },
        redmoney: (state, action) => {
            state.value -= action.payload;
        }
    }
});

export const { setMoney, redmoney } = monyslice.actions;
export default monyslice.reducer;