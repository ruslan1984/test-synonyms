import styled from "@emotion/styled";

const Block = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  align-items: start;
  margin: 5px 0;
  border-radius: 3px;
  align-items: center;
`;

export const BaseBlock = styled(Block)`
  background: white;
  padding: 10px 14px 7px 11px;
`;

export const EditBlock = styled(Block)`
  flex-direction: column;
  margin-bottom: 12px;
`;

export const NameText = styled.div`
  display: flex;
  flex: 1;
  color: #344273;
  font-weight: 700;
  font-size: 16px;
`;

export const BtnBlocks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
