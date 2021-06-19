import styled from "@emotion/styled";
import editIcon from "@assets/edit.svg";
import deleteIcon from "@assets/delete.svg";
import closeIcon from "@assets/close.svg";
import nodiceIcon from "@assets/notice.svg";

type IconPropsType = {
  position?: string;
  mr?: string | number;
  r?: string | number;
  t?: string | number;
};

const Icon = styled.div`
  background-size: contain;
  background-repeat: no-repeat;
  margin-right: ${({ mr }: IconPropsType) => mr || 0};
`;

export const EditBtn = styled(Icon)`
  width: 13px;
  height: 13px;
  opacity: 0.5;
  transition: 0.5s;
  cursor: pointer;
  background-repeat: no-repeat;
  &:hover {
    opacity: 1;
  }
  background-image: url(${editIcon});
`;

export const DeleteBtn = styled(Icon)`
  width: 12px;
  height: 12px;
  opacity: 0.5;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  background-image: url(${deleteIcon});
`;

export const NoticeIcon = styled(Icon)`
  width: 12px;
  height: 12px;
  background-image: url(${nodiceIcon});
`;

export const CloseBtn = styled(Icon)`
  opacity: 1;
  width: 20px;
  height: 20px;
  cursor: pointer;
  background-image: url(${closeIcon});
  position: ${({ position }: IconPropsType) => position || "static"};
  right: ${({ r }: IconPropsType) => r || 0};
  top: ${({ t }: IconPropsType) => t || 0};
`;
