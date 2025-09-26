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
    user: JSON.parse(localStorage.getItem("user") || null),
    token: localStorage.getItem("token"),
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
            localStorage.removeItem("token");
            localStorage.removeItem("user");
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
            localStorage.setItem("token", action.payload.accessToken)
            localStorage.setItem("user", JSON.stringify(action.payload.username))
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