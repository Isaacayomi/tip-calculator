function Button({ children, onClick, className }) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
export default Button;
