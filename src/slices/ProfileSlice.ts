import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IProfile } from '../Interfaces/IProfile';
import axios from 'axios';

interface ProfileState {
  loading: boolean;
  error: boolean;
  profile?: IProfile;
  profileList: IProfile[];
}

const initialProfileState: ProfileState = {
  loading: false,
  error: false,
  profileList: []
};

//All endpoints tbd, all mock for now
export const getProfileById = createAsyncThunk(
  'profile/userid',
  async (id: number) => {
    try {
      const res = await axios.get(`http://localhost:8080/profile/user?userId=${id}`);
      return res.data;
    } catch (err : any) {
      return err.message;
    }
  }
);

export const getAllProfiles = createAsyncThunk(
  'profile/getall',
  async ()=> {
    try {
      const res = await axios.get('http://localhost:8080/profile/all');
      return res.data;
    } catch (err: any) {
      return err.message;
    }
  }
);

export const createProfile = createAsyncThunk(
  'profile/create',
  async (prof: IProfile) => {
    try {
      const res = await axios.post('http://localhost:8080/profile/', prof);
      return res.data;
    } catch (err: any) {
      return err.message;
    }
  }
);

export const profileSlice = createSlice({
  name: 'profile',
  initialState: initialProfileState,
  reducers: {
    toggleError: state => {
      state.error = !state.error;
    },
    clearProfile: state => {
      state.profile = undefined;
    }
  },
  extraReducers: builder => {
    builder.addCase(getProfileById.pending, (state)=>{
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getProfileById.fulfilled, (state, action)=> {
      state.profile = action.payload;
      state.error = false;
      state.loading = false;
    });
    builder.addCase(getProfileById.rejected,(state)=> {
      state.error = true;
      state.loading = false;
    });
    builder.addCase(getAllProfiles.pending, (state)=>{
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getAllProfiles.fulfilled, (state, action)=> {
      state.profileList = action.payload;
      state.error = false;
      state.loading = false;
    });
    builder.addCase(getAllProfiles.rejected,(state)=> {
      state.error = true;
      state.loading = false;
    });
    builder.addCase(createProfile.pending, (state)=>{
      state.loading = true;
      state.error = false;
    });
    builder.addCase(createProfile.fulfilled, (state, action)=> {
      state.profile = action.payload;
      state.profileList.push(action.payload)
      state.error = false;
      state.loading = false;
    });
    builder.addCase(createProfile.rejected,(state)=> {
      state.error = true;
      state.loading = false;
    });
  }
});

//helper selectors, might need them at some point
export const selectAllProfiles = (state: { profile: { profileList: IProfile[]; }; }) => state.profile.profileList

export const selectCurrentProfile = (state: { profile: { profile: IProfile; }; }) => state.profile.profile


export const {toggleError, clearProfile} = profileSlice.actions

export default profileSlice.reducer;
