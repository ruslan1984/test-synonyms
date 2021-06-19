import styled from "@emotion/styled";
import loadingImg from "@assets/loading.svg";

type ButtonPropsType = {
  disabled?: boolean | number;
  loading?: boolean | number;
  save?: boolean | number;
  clear?: boolean | number;
  mr?: string | number;
  mb?: string | number;
  mt?: string | number;
  ml?: string | number;
};

const buttonLoading = `
  &:before {
    content: "";
    position: absolute;
    border-radius: 5px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background: var(--background);
  }
  &:after {
    content: url(${loadingImg});
    animation: loading 1.5s infinite linear;
    position: absolute; 
    z-index: 3;
  }
  @keyframes loading {
    to {
      transform: rotate(360deg);
    }
  }
`;

const Button = styled.button`
  --background: ${(props) =>
    props.save ? "#5E9574" : props.clear ? "#955E5E" : "#344273"};
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--background);
  border: 2px solid var(--background);
  margin-right: 5px;
  font-size: 10.8px;
  padding: 5px 9px;
  border-radius: 3px;
  font-weight: 700;
  letter-spacing: 0.4;
  margin-bottom: ${({ mb }: { mb?: string | number }) => mb || 0};
  margin-right: ${({ mr }: { mr?: string | number }) => mr || 0};
  margin-top: ${({ mt }: { mt?: string | number }) => mt || 0};
  margin-left: ${({ ml }: { ml?: string | number }) => ml || 0};
  transition: ${({ loading }: { loading?: boolean | number }) =>
    loading ? "0" : "0.3s"};
  ${(props: ButtonPropsType) => {
    if (props.disabled) {
      return "opacity: 0.5; color: white";
    }
    if (props.loading) {
      return buttonLoading;
    }
    if (!props.disabled) {
      return "&:hover, &:focus {background: #fff;color: #344273;} ";
    }
  }};
`;

export default Button;
