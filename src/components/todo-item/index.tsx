import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";
import { useAppDispatch } from "../../hooks";
import { taskDelete, taskFulfilled, updateTaskName } from "../../reducer";
import { Trash } from "../../images/trash";
import { Edit } from "../../images/edit";
import { Done } from "../../images/done";
import { TodoItemProps } from "./types";
import styles from "./styles.module.scss";

export const TodoItem = ({ taskName, isComplete }: TodoItemProps) => {
  const dispatch = useAppDispatch();
  const inputRef = useRef(null);
  const [isChecked, setIsChecked] = useState(isComplete);
  const [updatedTaskName, setUpdatedTaskName] = useState(taskName);
  const [isEditing, setIsEditing] = useState(false);
  const handleClick = () => dispatch(taskDelete(taskName));
  const handleCheck = () => setIsChecked(!isChecked);

  useEffect(() => {
    isChecked
      ? dispatch(taskFulfilled({ taskName, isComplete: true }))
      : dispatch(taskFulfilled({ taskName, isComplete: false }));
  }, [isChecked, dispatch, taskName]);

  const handleUpdateTaskName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedTaskName(e.target.value);
  };

  const handleBlur = () => {
    updatedTaskName.length && setIsEditing((prev) => !prev);
  };

  const handleEdit = () => {
    updatedTaskName.length && setIsEditing((prev) => !prev);
  };

  useEffect(() => {
    isEditing && inputRef?.current?.focus();
    !isEditing && inputRef?.current?.blur();
  }, [isEditing]);

  useEffect(() => {
    !isEditing && dispatch(updateTaskName({ taskName, updatedTaskName }));
  }, [isEditing]);

  return (
    <div className={cn(styles.wrapper, isChecked && styles.check)}>
      <div className={styles.item}>
        <input type="checkbox" onChange={handleCheck} checked={isChecked} />
        {isEditing ? (
          <>
            <input
              ref={inputRef}
              onBlur={handleBlur}
              className={cn(
                styles.input,
                !updatedTaskName.length && styles.empty
              )}
              onChange={handleUpdateTaskName}
              value={updatedTaskName}
              placeholder={
                updatedTaskName.length === 0 ? "Введите название задачи" : ""
              }
            ></input>
            <Done onClick={handleEdit} className={styles["button-done"]} />
          </>
        ) : (
          <span>{updatedTaskName}</span>
        )}
      </div>
      <div className={styles.buttons}>
        <Edit onClick={handleEdit} />
        <Trash onClick={handleClick} />
      </div>
    </div>
  );
};
