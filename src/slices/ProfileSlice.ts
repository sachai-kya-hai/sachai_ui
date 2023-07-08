import { createSlice } from "@reduxjs/toolkit";
import { IProfile } from "../Interfaces/IProfile";

interface ProfileState {
    loading: boolean,
    error: boolean,
    profile?: IProfile
}

const initialProfileState: ProfileState ={
    loading: false,
    error: false
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState: initialProfileState,
    reducers: {
        toggleError: (state) => {
            state.error = !state.error;
        },
        clearProfile: (state) => {
            state.profile = undefined;
        }
    },
    extraReducers: (builder) => {
        //axios calls once set up, will be set here through builders and cases.
    }
})

