interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger" | "success";
  onClick: () => void;
}

function Button({ children, onClick, color = "primary" }: Props) {
  return (
    <button className={"btn btn-" + color} type="submit" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
