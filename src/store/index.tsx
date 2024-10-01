import productsSlice from "./features/products"
import {appApi} from "./services/app"

import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux"
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE
} from "redux-persist"

import AsyncStorage from "@react-native-async-storage/async-storage"
import {Action, combineReducers, configureStore, ThunkAction} from "@reduxjs/toolkit"
import {setupListeners} from "@reduxjs/toolkit/query"

const persistConfig = {
  key: "products",
  storage: AsyncStorage,
  whitelist: [productsSlice.name]
}

const reducers = combineReducers({
  [appApi.reducerPath]: appApi.reducer,
  [productsSlice.name]: productsSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(appApi.middleware)
})

setupListeners(store.dispatch)

export default store
export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
