import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
	userInfo?: {
		email: string,
	} | null
	isLoadingSite: boolean,
	isLoadingModel: boolean
} = {
	userInfo: null,
	isLoadingSite: true,
	isLoadingModel: true
};

export const userSlice = createSlice({
	name: "userSlice",
	initialState,
	reducers: {
		addUserInfo(
			state, action: PayloadAction<{
				email: string,
			} | null>
		) {
			state.userInfo = action.payload;
		},
		setIsLoadingSite(
			state, action: PayloadAction<boolean>
		) {
			state.isLoadingSite = action.payload
		},
		setIsLoadingModel(
			state, action: PayloadAction<boolean>
		) {
			state.isLoadingModel = action.payload
		},
		clearUserInfo(
			state
		) {
			state.userInfo = null;
		}
	}
});

export const {
	addUserInfo,
	setIsLoadingSite,
	setIsLoadingModel,
	clearUserInfo
} = userSlice.actions;
export const userReducer = userSlice.reducer;
