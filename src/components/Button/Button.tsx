import styles from "./Button.module.css";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger" | "success";
  onClick: () => void;
}

function Button({ children, onClick, color = "primary" }: Props) {
  return (
    <button
      className={[styles.btn, styles["btn-" + color]].join(" ")}
      type="submit"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
