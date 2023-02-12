import { FEEDBACK_MAP } from "@src/constants/feedback";
import useBottomSheet from "@src/core/hooks/useBottomSheet";
import { Feedbacks } from "@src/pages/TaskFeedbackPage";
import { typo_body3_regular } from "@src/styles/Typo";
import { useState } from "react";
import styled from "styled-components";
import Button from "../common/Button";

const TaskFeedbackBottomSheet = ({
  category,
  onClick,
}: {
  category: Feedbacks;
  onClick: ({ id, types }: { id: number; types: number[] }) => void;
}) => {
  const [selected, setSelected] = useState<number[]>(category.selectedItems);
  const { closeBottomSheet } = useBottomSheet();

  const handleItemClick = (type: number) => {
    const hasItem = selected.find(item => item === type);

    setSelected(items => (hasItem ? items.filter(item => item !== type) : [...items, type]));
  };

  const handleButtonClick = () => {
    onClick({ id: category.id, types: selected });
    closeBottomSheet();
  };

  return (
    <>
      <Wrapper>
        {category.items.map(item => (
          <Item
            key={item}
            selected={!!selected.find(selectedItem => selectedItem === item)}
            onClick={() => handleItemClick(item)}
          >
            {FEEDBACK_MAP[item]}
          </Item>
        ))}
      </Wrapper>
      <Button value="선택 완료" type="primary" onClick={handleButtonClick} />
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 40px 0;
`;

const Item = styled.div<{ selected: boolean }>`
  ${typo_body3_regular};
  color: ${({ theme, selected }) => (selected ? theme.primaryPurple[500] : theme.gray[500])};
  display: flex;
  justify-content: center;
  padding: 13px 0;
  background-color: ${({ theme, selected }) => (selected ? theme.primaryPurple[100] : theme.gray[100])};
  border-radius: 50px;
`;

export default TaskFeedbackBottomSheet;
