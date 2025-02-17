import styles from "../styles/Input.module.css";

const Input = ({ className, placeholder, onInputChange }) => {
  return (
    <input
      type="text"
      className={className}
      placeholder={placeholder}
      onBlur={onInputChange}
    />
  );
};

export default Input;
