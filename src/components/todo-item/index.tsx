import { useState } from "react";
import cn from "classnames";
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
    <div className={cn(styles.wrapper, isChecked && styles.check)}>
      <div className={styles.item}>
        <input
          type="checkbox"
          onChange={handleCheck}
          checked={isChecked}
          value="as"
        />
        <span>{taskName}</span>
      </div>
      <img src={trash} alt="" onClick={handleClick} />
    </div>
  );
};
