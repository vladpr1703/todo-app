import { createSlice } from "@reduxjs/toolkit";
import { TodoItemProps } from "./components/todo-item/types";

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
    taskAdded(state, action) {
      state.todos.push(action.payload);
    },
    taskFulfilled(state, action) {
      const necessaryTask: TodoItemProps = state.todos.find(
        (task: TodoItemProps) => task.taskName === action.payload.taskName
      );
      necessaryTask.isComplete = action.payload.isComplete;
    },
    updateTaskName(state, action) {
      const necessaryTask: TodoItemProps = state.todos.find(
        (task: TodoItemProps) => task.taskName === action.payload.taskName
      );
      necessaryTask.taskName = action.payload.updatedTaskName;
    },
    taskDelete(state, action) {
      const index = state.todos.findIndex(
        (task) => task.taskName === action.payload
      );
      console.log(index);
      if (index === state.todos.length - 1) {
        state.todos.pop();
      }
      if (index === -1) {
        return;
      } else {
        state.todos.splice(index, 1);
      }
    },
  },
});

export const { actions, reducer } = todosSlice;

export const {
  taskAdded,
  taskDelete,
  loadTasksFromStorage,
  taskFulfilled,
  updateTaskName,
} = actions;

export default reducer;
