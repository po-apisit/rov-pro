import { ICatagorie } from "@/interface/rov/herogroup/rone/ICatagorie";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { thunk_catagorie_findall, thunk_catagorie_update } from "./rov.catagorie.thunk";
import { RootState } from "@/store";

interface Catagorie {
    data:ICatagorie[];
    is_loading: boolean;
    is_error: boolean;
    message_errror: string | null;
}

const initialState : Catagorie = {
    data: [],
    is_loading: false,
    is_error: false,
    message_errror: null
}

const rovCatagorieSlice = createSlice({
    name:"rov-catagorie-slice",
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder
            .addCase(thunk_catagorie_findall.pending, (state:Catagorie) => {
                state.is_loading = true;
                state.is_error = false;
                state.data = [];
                state.message_errror = null;
            })
            .addCase(thunk_catagorie_findall.fulfilled, (state:Catagorie, action:PayloadAction<ICatagorie[]>) => {
                if(action.payload){
                   const newCats:ICatagorie[] =  action.payload.map((cat:ICatagorie ) => {
                        const newCat:ICatagorie = {
                            _id : cat._id,
                            name_catagorie: cat.name_catagorie,
                            image_catagorie: cat.image_catagorie,
                            description_catagorie: cat.description_catagorie,
                            __v: cat.__v,
                            file: null,
                        }
                        return newCat;
                    })
                    state.data = newCats;
                }
                state.is_loading = false;
                state.is_error = false;
                state.message_errror = null;
            })
            .addCase(thunk_catagorie_findall.rejected, (state:Catagorie ) => {
                state.is_loading = false;
                state.data = [];
                state.is_error = true;
                state.message_errror = "server not response";
            })
            .addCase(thunk_catagorie_update.fulfilled, (state:Catagorie, action:PayloadAction<ICatagorie>) => {
                if(action.payload){
                    const newCat:ICatagorie = {
                        ...action.payload,
                        file:null,
                    };

                    const newCats:ICatagorie[] = state.data.map((cat:ICatagorie) => {
                        if(cat._id === newCat._id){
                            return newCat;
                        }
                        return cat;
                    })

                    state.data = newCats;
                    state.is_loading = false;
                    state.is_error = false;
                    state.message_errror = null;    
                }
            })
            .addCase(thunk_catagorie_update.rejected, (state:Catagorie) => {
                state.is_loading = false;
                state.is_error = true;
                state.message_errror = "server not response";
            })

    }
})

export default rovCatagorieSlice.reducer;
export const rovCatagorieSelector = (state:RootState) => state.rovCatagorieSlice;
