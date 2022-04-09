import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    users: [],
    loading: false,
    error: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getUsersStart: (state) => {
            state.loading = true;
        }
        ,
        getUsersSuccess: (state, action) => {
            state.loading = false;
            state.users = action.payload;
        }
        ,
        getUsersFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export const { getUsersStart, getUsersSuccess, getUsersFailure } = userSlice.actions;
export default userSlice.reducer;