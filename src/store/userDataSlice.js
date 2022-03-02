import { createSlice } from "@reduxjs/toolkit";

const userDataSlice = createSlice({
  name: "userData",
  initialState: {
    data: {},
    status: "UNSCCESS",
  },
  reducers: {
    setUserData(state, actions) {
      state.data = actions.payload;
      state.status = "SUCCESS";
    },
    setLogout(state) {
      state.data = {};
      state.status = "UNSUCCESS";
    },
  },
});

export const { setUserData, setLogout } = userDataSlice.actions;
export default userDataSlice.reducer;
