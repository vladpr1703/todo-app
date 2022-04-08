import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    loadTasksFromStorage(state, action) {
      state.todos = action.payload;
    },
    todoAdded(state, action) {
      state.todos.push(action.payload);
    },
    todoDelete(state, action) {
      state.todos.splice(action.payload, 1);
    },
  },
});

export const { actions, reducer } = todosSlice;

export const { todoAdded, todoDelete, loadTasksFromStorage } = actions;

export default reducer;
