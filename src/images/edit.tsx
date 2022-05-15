import styles from "./styles.module.scss";

export const Edit = ({ onClick }) => (
  <div onClick={onClick}>
    <svg
      className={styles.shadow}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      fillRule="evenodd"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.69198 14.081L4.16704 22.3054L10.1299 16.6166L4.69198 14.081ZM4.69198 14.081L9.6892 3.36445C10.3894 1.86286 12.1743 1.21318 13.6759 1.91335V1.91335C15.1776 2.61353 15.8273 4.39851 15.127 5.90016L11.7461 13.1507"
        stroke="#1C1C1C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M10 22H21"
        stroke="#1C1C1C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);
