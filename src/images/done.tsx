import styles from "./styles.module.scss";

export const Done = ({ onClick, className = "" }) => (
  <div onClick={onClick} className={className}>
    <svg
      className={styles.done}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24px"
      height="24px"
    >
      <path d="M9 19.4L3.3 13.7 4.7 12.3 9 16.6 20.3 5.3 21.7 6.7z" />
    </svg>
  </div>
);
