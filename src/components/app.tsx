import { useEffect } from "react";
import { TodoItem } from "./todo-item";
import NotFoundImage from "../images/not-found.svg";
import { loadTasksFromStorage } from "../reducer";
import { AddItem } from "./add-item";
import { TodoItemProps } from "./todo-item/types";
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
          {!todos.length ? (
            <div className={styles["not-found-block"]}>
              <span>Здесь пока пусто</span>
              <img src={NotFoundImage} alt="" />
            </div>
          ) : (
            todos.map((item: TodoItemProps, index: number) => {
              console.log(item);
              return (
                <TodoItem
                  key={new Date().getTime() + Math.random()}
                  taskName={item.taskName}
                  index={index}
                  isComplete={item.isComplete}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
