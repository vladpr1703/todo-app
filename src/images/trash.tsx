import styles from "./styles.module.scss";

export const Trash = ({ onClick }) => (
  <div onClick={onClick}>
    <svg
      className={styles.shadow}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 1C9.44772 1 9 1.44772 9 2V4H4C3.44772 4 3 4.44772 3 5C3 5.55228 3.44772 6 4 6H20C20.5523 6 21 5.55228 21 5C21 4.44772 20.5523 4 20 4H15V2C15 1.44772 14.5523 1 14 1H10ZM13 4H11V3H13V4Z"
        fill="#1E1E1E"
      />
      <path
        d="M10 11C10.5523 11 11 11.4477 11 12V18C11 18.5523 10.5523 19 10 19C9.44772 19 9 18.5523 9 18V12C9 11.4477 9.44772 11 10 11Z"
        fill="#1E1E1E"
      />
      <path
        d="M15 12C15 11.4477 14.5523 11 14 11C13.4477 11 13 11.4477 13 12V18C13 18.5523 13.4477 19 14 19C14.5523 19 15 18.5523 15 18V12Z"
        fill="#1E1E1E"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 7C4.44772 7 4 7.44772 4 8V20C4 21.6569 5.34315 23 7 23H17C18.6569 23 20 21.6569 20 20V8C20 7.44772 19.5523 7 19 7H5ZM6 20V9H18V20C18 20.5523 17.5523 21 17 21H7C6.44772 21 6 20.5523 6 20Z"
        fill="#1E1E1E"
      />
    </svg>
  </div>
);
