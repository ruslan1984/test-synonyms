import styled from "@emotion/styled";

const Block = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  align-items: start;
  margin: 4px 0;
  border-radius: 3px;
  align-items: center;
`;

export const BaseBlock = styled(Block)`
  background: white;
  padding: 8px 10px 7px;
`;

export const EditBlock = styled(Block)`
  flex-direction: column;
`;

export const NameText = styled.div`
  display: flex;
  flex: 1;
  color: #344273;
  font-weight: 700;
  font-size: 15px;
`;

export const BtnBlocks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
