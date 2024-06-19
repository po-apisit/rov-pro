import { API } from "@/util/api";
import { HttpClientCookie } from "@/util/httpClient";
import { createAsyncThunk } from "@reduxjs/toolkit";



export const thunk_hreo_findall = createAsyncThunk("thunk_hero_findall", async (_, thunk) => {
    try {
        const response = await HttpClientCookie.get(API.hero_findall);
        if(response.status === 200){
            return response.data;
        }

        return thunk.rejectWithValue({error: response.status})
    } catch (error) {
        return thunk.rejectWithValue({error})
    }
})