import { createSlice } from "@reduxjs/toolkit";

type ColorModes = "dark" | "light";

type InitialStateType = {
	mode: ColorModes;
};

const prefersDarkMode =
	window.matchMedia &&
	window.matchMedia("(prefers-color-scheme: dark)").matches;

const selectedColorMode = localStorage.getItem("mode");

const mode =
	selectedColorMode !== null
		? selectedColorMode
		: prefersDarkMode
		? "dark"
		: ("light" as const);

const initialState: InitialStateType = {
	mode: mode as ColorModes,
};

const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		toggleColorMode: (state) => {
			if (state.mode === "light") state.mode = "dark";
			else state.mode = "light";

			localStorage.setItem("mode", state.mode);
		},
	},
});

export const { toggleColorMode } = themeSlice.actions;

export default themeSlice.reducer;
