import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "../lib/api";
import {
	useSelector as useReduxSelector,
	useDispatch as useReduxDispatch,
	TypedUseSelectorHook,
} from "react-redux";
import themeSlice from "./theme.slice";

export const store = configureStore({
	reducer: {
		[api.reducerPath]: api.reducer,
		theme: themeSlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);

export type StoreType = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;

export const useDispatch = useReduxDispatch<RootDispatch>;
export const useSelector: TypedUseSelectorHook<StoreType> = useReduxSelector;
