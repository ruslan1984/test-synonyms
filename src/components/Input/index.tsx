import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import React, { FormEvent } from "react";
import { Input as StyledInput, ErrorText, InputBlock } from "./styles";

interface IInput {
  props?: React.InputHTMLAttributes<HTMLInputElement>;
  defaultValue?: string;
  value?: string;
  placeholder?: string;
  padding?: string;
  onChange?: (e: FormEvent) => void;
  mb?: string | number;
  errorText?: string;
}

const Input = ({
  errorText,
  mb,
  padding,
  ...props
}: IInput): ReactJSXElement => (
  <InputBlock mb={mb}>
    <StyledInput {...props} />
    {errorText && <ErrorText>{errorText}</ErrorText>}
  </InputBlock>
);
export default Input;
