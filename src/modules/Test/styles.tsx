import styled from "@emotion/styled";

export const BtnBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Modal = styled.div`
  max-width: 510px;
  width: 100%;
  background: #efefef;
  position: relative;
  box-sizing: border-box;
  padding: 20px;
  @media (max-width: 600px) {
    max-width: 600px;
    width: 100%;
    height: 100%;
  }
`;

export const Title = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 20px;
  font-size: 18px;
  letter-spacing: 0.1;
  font-weight: 700;
`;
export const Title1 = styled.div`
  font-size: 15px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  span {
    margin-right: 8px;
  }
`;
export const CloseBtnPosition = styled.div`
  position: absolute;
  top: 20px;
  right: 15px;
`;

export const Form = styled.form`
  width: 100%;
  margin-bottom: ${({ mb }: { mb?: string | number }) => mb || 0};
`;

export const List = styled.div`
  overflow-y: auto;
  height: 250px;
  max-height: calc(100vh - 264px);
`;
export const Hr = styled.hr`
  border: 1px solid #dedede;
  background: #dedede;
  margin-bottom: ${({ mb }: { mb?: string | number }) => mb || 0};
`;

export const Note = styled.div`
  font-size: 12px;
  color: #787878;
  letter-spacing: 0.4;
  color: #787878;
  margin-bottom: ${({ mb }: { mb?: string | number }) => mb || 0};
`;

export const Header = styled.header`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

export const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0 20px 20px;
  box-sizing: border-box;
`;

export const Body = styled.div`
  padding-top: 53px;
  padding-bottom: 56px;
`;
