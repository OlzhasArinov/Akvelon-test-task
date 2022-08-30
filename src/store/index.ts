import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import userDetailReducer from './slices/userDetailedSlice';

const rootReducer = combineReducers({
    userReducer,
    userDetailReducer
  })
  
  export function setupStore() {
    return configureStore({
      reducer: rootReducer
    })
  }

  export const store = setupStore()

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']