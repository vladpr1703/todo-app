import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    todoAdded(state, action) {
      state.todos.push(action.payload);
    },
    todoDelete(state, action) {
      state.todos.splice(action.payload, 1);
    },
  },
});

export const { actions, reducer } = todosSlice;

export const { todoAdded, todoDelete } = actions;

export default reducer;
