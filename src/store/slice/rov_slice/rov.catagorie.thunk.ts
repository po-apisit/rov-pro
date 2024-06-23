import { ICatagorie } from "@/interface/rov/herogroup/rone/ICatagorie";
import { API } from "@/util/api";
import { HttpClientCookie, HttpClientUpload } from "@/util/httpClient";
import { createAsyncThunk, GetThunkAPI } from "@reduxjs/toolkit";

//:GetThunkAPI<AsyncThunkConfig>

export const thunk_catagorie_findall = createAsyncThunk("thunk_catagorie_findall", async (_, thunk) => {
    try {
        const response = await HttpClientCookie.get(API.catagorie);
        if(response.status === 200){
            return response.data;
        }

        return thunk.rejectWithValue({error: response.status})
    } catch (error) {
        return thunk.rejectWithValue({error})
    }
})

export const thunk_catagorie_delete = createAsyncThunk("thunk_catagorie_delete", async (id:string, thunk) => {
    try {
         await HttpClientCookie.delete(API.catagorie + "/" + id);
        return id;

    } catch (error) {
        return thunk.rejectWithValue({error})
    }
})

export const thunk_catagorie_update = createAsyncThunk("thunk_catagorie_update", async (data:ICatagorie, thunk) => {
    try {
        
        if(data.file !== null){
            const forData = new FormData;
            forData.append("file", data.file);
            const response = await HttpClientUpload.post(API.catagorie_upload + "/" + data._id, forData);
            if(response.status === 201){
                const newCat:ICatagorie = {
                    ...data,
                    image_catagorie: response.data.image_catagorie
                }
                    const _response = await HttpClientCookie.patch(API.catagorie + "/" + data._id, newCat);
         
                    if(_response.status === 200){
                        return _response.data;
                    }
                    return thunk.rejectWithValue({error:"Update invalid"})
            }
            return thunk.rejectWithValue({error:"uploadfile invalid"})
        }
        const response = await HttpClientCookie.patch(API.catagorie + "/" + data._id, data);
         
        if(response.status === 200){
            return response.data;
        }

        return thunk.rejectWithValue({error: response.status})
    } catch (error) {
        return thunk.rejectWithValue({error})
    }
});



export const thunk_catagorie_add = createAsyncThunk("thunk_catagorie_add", async (data:ICatagorie, thunk) => {
    try {
        let newCat:ICatagorie = {
            ...data,
        }
        const createResponse = await HttpClientCookie.post(API.catagorie, data);
     
        
        if(createResponse.status === 201){
            newCat._id = createResponse.data._id;

            if(data.file !== null){
                const forData = new FormData;
                forData.append("file", data.file);
                const response = await HttpClientUpload.post(API.catagorie_upload +"/"+createResponse.data._id, forData);
                if(response.status === 201){
                        newCat.image_catagorie = response.data.image_catagorie;
                        const _response = await HttpClientCookie.patch(API.catagorie + "/" + createResponse.data._id, newCat);
             
                        if(_response.status === 200){
                            return _response.data;
                        }
                        return thunk.rejectWithValue({error:"Update invalid"})
                }
                return thunk.rejectWithValue({error:"uploadfile invalid"})
            }
            return thunk.rejectWithValue({error: "uploadfile file"})
        }

        return thunk.rejectWithValue({error: "add file"})
    } catch (error) {
        return thunk.rejectWithValue({error})
    }
})

