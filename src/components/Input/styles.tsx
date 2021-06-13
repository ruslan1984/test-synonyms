import styled from "@emotion/styled";
import errorImg from "@assets/error.svg";

export const InputBlock = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: ${({ mb }: { mb?: string | number }) => mb || 0};
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid rgba(52, 66, 115, 0.5);
  outline: none;
  transition: 0.5s;
  position: relative;
  padding: 9px 0;
  width: 100%;
  background: none;
  &::-webkit-input-placeholder {
    color: rgba(52, 66, 115, 0.5);
  }
  &:-ms-input-placeholder {
    color: rgba(52, 66, 115, 0.5);
  }
  &::-moz-placeholder {
    color: rgba(52, 66, 115, 0.5);
    opacity: 1;
  }
  &:-moz-placeholder {
    color: rgba(52, 66, 115, 0.5);
    opacity: 1;
  }
  &:focus {
    border-bottom: 1px solid rgba(52, 66, 115, 1);
  }
`;

export const ErrorText = styled.div`
  color: #c23e42;
  font-size: 14px;
  padding-left: 15px;
  &:after {
    content: url(${errorImg});
    position: absolute;
    bottom: 7px;
    left: 0;
  }
`;
