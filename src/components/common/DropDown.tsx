import { useEffect, useState } from "react";
import styled from "styled-components";

import Icons from "@src/assets/icons";
import { typo_body1_medium } from "@src/styles/Typo";

export type DropDownData = {
  id: number;
  value: string;
};

type Props = {
  data: DropDownData[];
  onChange: (Item: DropDownData) => void;
};

const DropDown = ({ data, onChange }: Props) => {
  const [{ value, id }, setCurrentValue] = useState<DropDownData>(data[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(state => !state);
  };

  const handleSelected = (item: DropDownData) => {
    setCurrentValue(item);
    setIsOpen(false);
  };

  useEffect(() => {
    onChange({ value, id });
  }, [value]);

  return (
    <DropDownWrapper>
      <CurrentValueWrapper onClick={handleOpen}>
        <Value>{value}</Value>
        <Icons.IconDropDown />
      </CurrentValueWrapper>
      {isOpen && (
        <ListWrapper>
          {data.map(item => (
            <Item key={item.id} isSelected={item.id === id} onClick={() => handleSelected(item)}>
              <ItemValue>{item.value}</ItemValue>
            </Item>
          ))}
        </ListWrapper>
      )}
    </DropDownWrapper>
  );
};

const DropDownWrapper = styled.div`
  position: relative;

  padding: 10px 8px 10px 12px;
  background-color: ${({ theme }) => theme.colors.gray[100]};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 8px;
`;

const CurrentValueWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Value = styled.p`
  flex: 1;
  ${typo_body1_medium};
  color: ${({ theme }) => theme.colors.black};
`;

const ListWrapper = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  position: absolute;
  left: 0;
  top: calc(100% + 4px);
  padding: 4px;
  width: 100%;
  max-height: 208px;
  background-color: ${({ theme }) => theme.colors.gray[100]};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 8px;

  &::-webkit-scrollbar {
    width: 14px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.gray[500]};
    background-clip: padding-box;
    border: 4px solid transparent;
    border-radius: 6px;
  }
`;

const ItemValue = styled.p`
  overflow: hidden;
  ${typo_body1_medium};
  text-overflow: ellipsis;
`;

const Item = styled.div<{ isSelected: boolean }>`
  width: 100%;
  padding: 10px 8px;
  background-color: ${({ theme, isSelected }) => (isSelected ? theme.colors.main[100] : "transparent")};
  border-radius: 8px;

  & > ${ItemValue} {
    color: ${({ theme, isSelected }) => (isSelected ? theme.colors.main[500] : theme.colors.black)};
  }
`;

export default DropDown;
