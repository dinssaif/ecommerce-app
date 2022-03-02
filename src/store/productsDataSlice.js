import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getData = createAsyncThunk("data/getData", async () => {
  return fetch(
    "https://mystore-api-b589a-default-rtdb.asia-southeast1.firebasedatabase.app/0/bydate.json"
  ).then((res) => res.json());
});

const productDataSlice = createSlice({
  name: "ProductData",
  initialState: {
    data: [],
    state: null,
  },
  extraReducers: {
    [getData.pending]: (state, actions) => {
      state.state = "sending";
    },
    [getData.fulfilled]: (state, actions) => {
      state.state = "success";
      state.data = Object.values(actions.payload);
    },
    [getData.rejected]: (state, actions) => {
      state.state = "failed";
    },
  },
});
export default productDataSlice.reducer;
