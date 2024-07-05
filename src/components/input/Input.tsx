import { styled } from "styled-components";

type InputPropsType = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  placeholder: string;
};

export const Input = ({ onChange, className, placeholder }: InputPropsType) => {
  return (
    <div>
      <StyledInput
        onChange={onChange}
        className={className}
        placeholder={placeholder}
      />
    </div>
  );
};

const StyledInput = styled.input`
  margin: 10px;
  width: 200px;
  padding: 0.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 12px;

  &:focus {
    outline: none;
    border: 1px solid #14a0ca;
  }
`;
