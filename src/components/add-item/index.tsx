import { useState } from "react";
import { useAppDispatch } from "../../hooks";
import { taskAdded } from "../../reducer";
import styles from "./styles.module.scss";

export const AddItem = () => {
  const [taskName, setTaskName] = useState("");
  const dispatch = useAppDispatch();

  const handleAddItem = () => {
    dispatch(taskAdded({ taskName, isComplete: false }));
    setTaskName("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTaskName(e.target.value);

  return (
    <div className={styles.wrapper}>
      <input onChange={handleChange} value={taskName}></input>
      <button
        disabled={!taskName.length}
        onClick={handleAddItem}
        className={styles["plus-button"]}
      ></button>
    </div>
  );
};
