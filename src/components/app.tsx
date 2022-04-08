import { useEffect } from "react";
import { TodoItem } from "./todo-item";
import { loadTasksFromStorage } from "../reducer";
import { AddItem } from "./add-item";
import { TodosList } from "./types";
import { useAppDispatch, useAppSelector } from "../hooks";
import styles from "./styles.module.scss";

export const App = () => {
  const dispatch = useAppDispatch();

  const todos = useAppSelector((state) => state.todo.todos);

  let todosFromStorage: TodosList | null = JSON.parse(
    localStorage.getItem("todos")
  );

  useEffect(() => {
    dispatch(loadTasksFromStorage(todosFromStorage));
  }, []);

  useEffect(
    () => localStorage.setItem("todos", JSON.stringify(todos)),
    [todos]
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.todo}>
        <AddItem />
        <div className={styles.taskList}>
          {todos.map((item, index) => (
            <TodoItem
              key={new Date().getTime() + Math.random()}
              taskName={item.taskName}
              index={index}
              isComplete={item.isComplete}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
