import { useState } from "react";
import { useAppDispatch } from "../../hooks";
import { todoDelete } from "../../reducer";
import trash from "../../images/trash.svg";
import { TodoItemProps } from "./types";
import styles from "./styles.module.scss";

export const TodoItem = ({ taskName, isComplete, index }: TodoItemProps) => {
  const dispatch = useAppDispatch();
  const [isChecked, setIsChecked] = useState(isComplete);
  const handleClick = () => dispatch(todoDelete(index));
  const handleCheck = () => setIsChecked(!isChecked);

  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <input type="checkbox" onChange={handleCheck} checked={isChecked} />
        <span>{taskName}</span>
      </div>
      <img src={trash} alt="" onClick={handleClick} />
    </div>
  );
};
