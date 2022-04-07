import { useState } from "react";
import { useAppDispatch } from "../../hooks";
import { todoAdded } from "../../reducer";
import styles from "./styles.module.scss";

export const AddItem = () => {
  const [taskName, setTaskName] = useState("");
  const dispatch = useAppDispatch();
  const handleAddItem = () => {
    dispatch(todoAdded({ taskName, isCompleted: false }));
  };
  const handleChange = (e) => setTaskName(e.target.value);
  return (
    <div className={styles.wrapper}>
      <input onChange={handleChange}></input>
      <button
        onClick={handleAddItem}
        className={styles["plus-button"]}
      ></button>
    </div>
  );
};
