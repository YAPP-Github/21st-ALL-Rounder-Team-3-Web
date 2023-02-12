import Icons from "@src/assets/icons";
import TaskFeedbackBottomSheet from "@src/components/bottomSheet/TaskFeedbackBottomSheet";
import Button from "@src/components/common/Button";
import TextArea from "@src/components/common/TextArea";
import DefaultLayout from "@src/components/layout/DefaultLayout";
import FixedBottomButtonLayout from "@src/components/layout/FixedBottomButtonLayout";
import { FEEDBACK_MAP } from "@src/constants/feedback";
import useBottomSheet from "@src/core/hooks/useBottomSheet";
import useSendFeedbackMutation from "@src/core/queries/sendFeedbackMutation";
import { typo_h1_semibold, typo_body2_medium, typo_h4_semibold, typo_body4_regular } from "@src/styles/Typo";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const TaskFeedbackPage = () => {
  const [feedbacks, setFeedbacks] = useState<Feedbacks[]>(FEEDBACKS);
  const [otherFeedback, setOtherFeedback] = useState("");
  const { taskId } = useParams();

  const { openBottomSheet, closeBottomSheet } = useBottomSheet();
  const { mutate } = useSendFeedbackMutation();

  const hasFeedback = Boolean(feedbacks.find(category => !!category.selectedItems.length) && otherFeedback);
  const selectedFeedback = feedbacks.reduce<number[]>((acc, cur) => [...acc, ...cur.selectedItems], []);

  const handleCategoryClick = (category: Feedbacks) => {
    openBottomSheet({
      title: category.title,
      content: <TaskFeedbackBottomSheet category={category} onClick={handleSelectFeedback} />,
      onClose: closeBottomSheet,
    });
  };

  const handleSelectFeedback = ({ id, types }: { id: number; types: number[] }) => {
    setFeedbacks(feedbacks =>
      feedbacks.map(item => {
        if (item.id !== id) {
          return item;
        }

        return {
          ...item,
          selectedItems: types,
        };
      }),
    );
  };

  const handleDeleteFeedback = ({ id, type }: { id: number; type: number }) => {
    setFeedbacks(feedbacks =>
      feedbacks.map(item => {
        if (item.id !== id) {
          return item;
        }

        const hasFeedback = item.selectedItems.find(selectedItem => selectedItem === type);

        return {
          ...item,
          selectedItems: hasFeedback ? item.selectedItems.filter(item => item !== type) : [...item.selectedItems, type],
        };
      }),
    );
  };

  const handleSubmit = () => {
    if (taskId) {
      mutate({ taskId, checkList: selectedFeedback, detail: otherFeedback });
      // TODO: navigate
    }
  };

  return (
    <DefaultLayout onBack={() => {}} title="">
      <Wrapper>
        <HeaderWrapper>
          <TitleWrapper>
            <Title>피드백 하기</Title>
          </TitleWrapper>
          <Description>가연님에게 더 보완할 부분이나, 수정할 내용을 알려주세요!</Description>
        </HeaderWrapper>
        <ListWrapper>
          {feedbacks.map(category => (
            <CategoryWrapper key={category.id}>
              <Category
                key={category.title}
                onClick={() => handleCategoryClick(category)}
                selected={!!category.selectedItems.length}
              >
                {category.title}
              </Category>
              {category.selectedItems.map(item => (
                <SelectedFeedback key={item}>
                  {FEEDBACK_MAP[item]}
                  <Icons.IconClose
                    width={10}
                    height={10}
                    onClick={() => handleDeleteFeedback({ id: category.id, type: item })}
                  />
                </SelectedFeedback>
              ))}
            </CategoryWrapper>
          ))}
        </ListWrapper>
        <TextArea
          value={otherFeedback}
          placeholder="추가적인 피드백이 필요하다면 자유롭게 작성해주세요."
          onChange={value => setOtherFeedback(value)}
        />
      </Wrapper>
      <FixedBottomButtonLayout>
        <Button value="피드백 보내기" type="primary" disabled={!hasFeedback} onClick={handleSubmit} />
      </FixedBottomButtonLayout>
    </DefaultLayout>
  );
};

export interface Feedbacks {
  id: number;
  title: string;
  items: number[];
  selectedItems: number[];
}

const FEEDBACKS: Feedbacks[] = [
  {
    id: 1,
    title: "자료조사가 부족한 것 같아요.",
    items: [11, 12, 13, 14, 15, 16, 17],
    selectedItems: [],
  },
  {
    id: 2,
    title: "발표 대본 준비가 아쉬워요.",
    items: [21, 22, 23, 24, 25],
    selectedItems: [],
  },
  {
    id: 3,
    title: "피피티 보완이 필요해요.",
    items: [31, 32, 33, 34, 35],
    selectedItems: [],
  },
  {
    id: 4,
    title: "업무 완성도를 높여주세요.",
    items: [41, 42, 43, 44],
    selectedItems: [],
  },
  {
    id: 5,
    title: "업무 기한을 지켜주세요.",
    items: [51],
    selectedItems: [],
  },
];

const Wrapper = styled.div`
  padding: 35px 16px 0;
`;

const HeaderWrapper = styled.div`
  margin-bottom: 30px;
`;

const TitleWrapper = styled.div`
  margin-bottom: 12px;
`;

const Title = styled.h1`
  ${typo_h1_semibold};
  color: ${({ theme }) => theme.black};
`;

const Description = styled.p`
  ${typo_body2_medium}
  color: ${({ theme }) => theme.gray[600]};
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 40px;
`;

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Category = styled.div<{ selected: boolean }>`
  ${typo_h4_semibold};
  color: ${({ theme, selected }) => (selected ? theme.primaryPurple[500] : theme.gray[600])};
  padding: 15px 16px;
  border: 1px solid ${({ theme, selected }) => (selected ? theme.primaryPurple[500] : theme.gray[400])};
  border-radius: 16px;
`;

const SelectedFeedback = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  width: fit-content;
  ${typo_body4_regular};
  color: ${({ theme }) => theme.primaryPurple[500]};
  padding: 8px 14px;
  background-color: ${({ theme }) => theme.primaryPurple[100]};
  border-radius: 50px;
`;

export default TaskFeedbackPage;
