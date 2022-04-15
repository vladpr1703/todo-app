import { useEffect, useState } from "react";
import cn from "classnames";
import { useAppDispatch } from "../../hooks";
import { taskDelete, taskFulfilled } from "../../reducer";
import trash from "../../images/trash.svg";
import { TodoItemProps } from "./types";
import styles from "./styles.module.scss";

export const TodoItem = ({ taskName, isComplete, index }: TodoItemProps) => {
  const dispatch = useAppDispatch();
  const [isChecked, setIsChecked] = useState(isComplete);
  const handleClick = () => dispatch(taskDelete(taskName));
  const handleCheck = () => setIsChecked(!isChecked);

  useEffect(() => {
    isChecked
      ? dispatch(taskFulfilled({ taskName, isComplete: true }))
      : dispatch(taskFulfilled({ taskName, isComplete: false }));
  }, [isChecked, dispatch, taskName]);

  return (
    <div className={cn(styles.wrapper, isChecked && styles.check)}>
      <div className={styles.item}>
        <input type="checkbox" onChange={handleCheck} checked={isChecked} />
        <span>{taskName}</span>
      </div>
      <img src={trash} alt="" onClick={handleClick} />
    </div>
  );
};
