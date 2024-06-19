import { IUser } from "@/interface/user/IUser";
import { RootState } from "@/store";
import { createSlice } from "@reduxjs/toolkit";

interface User {
    user: IUser | null;
    is_loading: boolean;
    is_error: boolean;
    is_login: boolean;
    message_error: string | null;
};

const initialState : User = {
    user: null,
    is_loading: false,
    is_error: false,
    message_error: null,
    is_login: false
};

const userSlice = createSlice({
    name: "user-slice",
    initialState,
    reducers: {}
});


export default userSlice.reducer;
export const userSelector = (state: RootState) => state.userSlice;
