import styled from "styled-components";
import styles from "./Button.module.css";

type ButtonPropsType = {
  title: string;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

export const Button = ({
  title,
  onClick,
  className,
  disabled,
  type,
}: ButtonPropsType) => {
  return (
    <button
      className={`${styles.button} ${className ? styles[className] : ""}`}
      disabled={disabled}
      type={type}
      onClick={onClick}>
      {title}
    </button>
  );
};

const StyledButton = styled.button`
  background-color: #007bff;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  
`;
