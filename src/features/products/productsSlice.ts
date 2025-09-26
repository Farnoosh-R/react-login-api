import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ProductResponse, Products } from "./productType";
import productApi from "./productApi";

interface ProductState {
    products: Products[];
    loading: boolean;
    error: string | null;
}
const initialState: ProductState = {
    products: [],
    loading: false,
    error: null
}
export const fetchProducts = createAsyncThunk ("products/fetch", async (_, {rejectWithValue}) => {
    try {
        return await productApi()
    } catch (error: any) {
        return rejectWithValue(error.response?.data.message)
    }
})
const productsSlice = createSlice({
    name: "product",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<ProductResponse>) => {
            state.loading = false;
            state.error = null;
            state.products = action.payload.products
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string
        })
    }
})
export default productsSlice.reducer;