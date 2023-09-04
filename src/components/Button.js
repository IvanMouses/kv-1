import "./Button.css";

function Button({ children, color, onClick, type }) {
  return (
    <button type={type} onClick={onClick} className={`button ${color}`}>
      {children}
    </button>
  );
}

export default Button;
