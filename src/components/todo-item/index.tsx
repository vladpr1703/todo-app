import { useState } from "react";
import trash from "../../images/trash.svg";
import { TodoItemProps } from "./types";
import styles from "./styles.module.scss";

export const TodoItem = ({ taskName, isComplete }: TodoItemProps) => {
  const [isChecked, setIsChecked] = useState(isComplete);
  const handleClick = () => console.log("trash");
  const handleCheck = () => setIsChecked(!isChecked);

  console.log(isChecked);
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
