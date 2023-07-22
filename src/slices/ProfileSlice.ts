import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IProfile } from '../Interfaces/IProfile';
import axios from 'axios';

interface ProfileState {
  loading: boolean;
  error: boolean;
  profile?: IProfile;
}

const initialProfileState: ProfileState = {
  loading: false,
  error: false
};

//All endpoints tbd, all mock for now
export const getById = createAsyncThunk(
  'profile/userid',
  async (id: number) => {
    try {
      const res = await axios.get(
        `http://localhost:8080/profile/user?userId=${id}`
      );
      console.log(res.data);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const getAllProfiles = createAsyncThunk(
  'profile/getall',
  async thunkAPI => {
    try {
      const res = await axios.get('http://localhost:8080/profile/all');
      console.log(res.data);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const createProfile = createAsyncThunk(
  'date/book',
  async (prof: IProfile, thunkAPI) => {
    try {
      const res = await axios.post('http://localhost:8080/profile/', prof);
      console.log(res.data);
      return res.data;
    } catch (e) {
      console.log(e);
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
    //axios calls once set up, will be set here through builders and cases.
  }
});

export default profileSlice.reducer;
