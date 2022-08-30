import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { AppDispatch } from "..";
import { IUser } from "../../models";


export const initialState: UserDetailState = {
    userDetail: null,
    loading: false,
    error: '',
};

interface UserDetailState {
  userDetail: IUser | null
  loading: boolean
  error: string
}

export const userDetailSlice = createSlice({
  name: 'userDetail',
  initialState,
  reducers: {
    userFetching(state) {
      state.loading = true
    },
    userFetchingSuccess(state, action: PayloadAction<IUser>) {
      state.loading = false
      state.error = ''
      state.userDetail = action.payload
    },
    userFetchingError(state, action: PayloadAction<Error>) {
      state.loading = false
      state.error = action.payload.message
    }
  }
})

export default userDetailSlice.reducer

export const fetchUser = (id: string) => {
    return async (dispatch: AppDispatch) => {
      try {
        dispatch(userDetailSlice.actions.userFetching)
        const response = await (await fetch(`https://reqres.in/api/users/${id}`)).json()
        dispatch(userDetailSlice.actions.userFetchingSuccess(response.data))
      } catch (e) {
        dispatch(userDetailSlice.actions.userFetchingError(e as Error))
      }
    }
  }
