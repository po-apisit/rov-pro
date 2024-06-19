import { IUser } from "@/interface/user/IUser";
import { GetThunkAPI, createAsyncThunk } from "@reduxjs/toolkit";

export const Login = createAsyncThunk("user-login", async (data:IUser, thunk) => {
    try {
        
    } catch (error) {
        return thunk.rejectWithValue({error});
    }
})