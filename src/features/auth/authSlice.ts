import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { LoginResponse, User } from "./authTypes";
import authApi from "./authApi";

interface authState {
    user: User | null;
    token: string | null;
    loading: boolean;
    error: string | null;
    
}
const initialState: authState = {
    user: null,
    token: null,
    loading: false,
    error: null
}
export const login = createAsyncThunk<LoginResponse, {username: string, password: string}>("auth/login", async ({username, password}, {rejectWithValue}) => {
    try {
        return await authApi(username, password)
    } catch (err: any) {
        return rejectWithValue(err.response?.data.message)
    }
})
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout(state) {
            state.token = null;
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(login.fulfilled, (state, action: PayloadAction<LoginResponse>) => {
            state.loading = false;
            state.error = null;
            state.token = action.payload.accessToken;
            state.user = {
                id: action.payload.id,
                username: action.payload.username,
                email: action.payload.email
            }
        })
        .addCase(login.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(login.rejected, (state, action) => {
            state.error = action.payload as string;
            state.loading = false;
        })
    }
})
export const {logout} = authSlice.actions;
export default authSlice.reducer;