import { TodoItem } from "./components/todo-item";
import { AddItem } from "./components/add-item";
import { useAppSelector } from "./hooks";
import styles from "./styles.module.scss";

export const App = () => {
  const todos = useAppSelector((state) => state.todo.todos);

  return (
    <div className={styles.wrapper}>
      <div className={styles.todo}>
        <AddItem />
        <div className={styles.taskList}>
          {todos.map((item) => (
            <TodoItem taskName={item.taskName} isComplete={item.isComplete} />
          ))}
        </div>
      </div>
    </div>
  );
};
