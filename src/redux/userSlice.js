import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: {
      login: false,
      user_name: 'ahahaha'
    },
  },
  reducers: {
    setUser: (state, data) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = {
        login: true,
        user_name: data.payload
      };
    },
  },
});

export const { setUser } = userSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const userLoggedin = (data) => dispatch => {
  setTimeout(() => {
    dispatch(setUser(data));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const getUser = state => state.user.value;

export default userSlice.reducer;
