import Button from "@src/components/common/Button";
import DefaultLayout from "@src/components/layout/DefaultLayout";
import useBottomSheet from "@src/core/hooks/useBottomSheet";
import { typo_h1_semibold, typo_body2_medium, typo_h4_semibold, typo_body3_regular } from "@src/styles/Typo";
import { useState } from "react";
import styled from "styled-components";

const FEEDBACK_DATA: { [key: number]: string } = {
  11: "자료조사가 부족한 것 같아요.",
  12: "자료 양이 좀 부족해요.",
  13: "시각 자료가 더 있으면 좋겠어요.",
  14: "구체적인 예시가 있으면 좋겠어요.",
  15: "프로젝트와 관련 없는 자료가 많아요.",
  16: "자료의 출처를 보완해주세요.",
  17: "자료가 너무 많아서 요약이 필요해요.",
  21: "발표 준비가 아쉬워요.",
  22: "대본이 더 구체적이었으면 좋겠어요.",
  23: "좀 더 흥미로운 내용이 첨가되었으면 좋겠어요.",
  24: "너무 분량이 적은 것 같아요.",
  25: "너무 분량이 많은 것 같아요.",
  31: "피피티 보완이 필요해요.",
  32: "전반적인 디자인이 수정되었으면 좋겠어요.",
  33: "가독성이 떨어져요. 폰트/레이아웃을 수정해주세요.",
  34: "이미지가 추가되었으면 좋겠어요.",
  35: "누락된 내용이 있는 것 같아요. 확인해주세요.",
  41: "업무 완성도를 높여주세요.",
  42: "의논한 내용이 반영되지 않았아요.",
  43: "분량이 부족한 것 같아요.",
  44: "좀 더 새로운 내용이 필요해요.",
  51: "업무 기한을 지켜주세요.",
};

const LIST_DATA = [
  {
    title: "자료조사가 부족한 것 같아요.",
    subItem: [11, 12, 13, 14, 15, 16, 17],
  },
  {
    title: "발표 대본 준비가 아쉬워요.",
    subItem: [21, 22, 23, 24, 25],
  },
  {
    title: "피피티 보완이 필요해요.",
    subItem: [31, 32, 33, 34, 35],
  },
  {
    title: "업무 완성도를 높여주세요.",
    subItem: [41, 42, 43, 44],
  },
  {
    title: "업무 기한을 지켜주세요.",
    subItem: [51],
  },
];

const BottomSheetContent = ({ items, onClick }: { items: number[]; onClick: (types: number[]) => void }) => {
  const [selected, setSelected] = useState<number[]>([]);

  const { closeBottomSheet } = useBottomSheet();

  const handleFeedbackClick = (type: number) => {
    const hasType = selected.find(value => value === type);

    if (hasType) {
      setSelected(selected.filter(value => value !== type));
    } else {
      setSelected(types => [...types, type]);
    }
  };

  const handleClose = () => {
    onClick(selected);
    closeBottomSheet();
  };

  return (
    <>
      <BottomSheetContentWrapper>
        {items.map(item => (
          <BottomSheetContentItem
            key={item}
            selected={!!selected.find(value => value === item)}
            onClick={() => handleFeedbackClick(item)}
          >
            {FEEDBACK_DATA[item]}
          </BottomSheetContentItem>
        ))}
      </BottomSheetContentWrapper>
      <Button value="선택 완료" type="primary" onClick={handleClose} />
    </>
  );
};

const TaskFeedbackPage = () => {
  const [feedback, setFeedback] = useState<number[]>([]);

  const { openBottomSheet, closeBottomSheet } = useBottomSheet();

  const handleSelectFeedback = (types: number[]) => {
    setFeedback(item => [...item, ...types]);
  };

  const handleItemClick = (title: string, items: number[]) => {
    openBottomSheet({
      title,
      content: <BottomSheetContent items={items} onClick={handleSelectFeedback} />,
      onClose: closeBottomSheet,
    });
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
          {LIST_DATA.map(item => (
            <Item key={item.title} onClick={() => handleItemClick(item.title, item.subItem)}>
              {item.title}
            </Item>
          ))}
        </ListWrapper>
      </Wrapper>
    </DefaultLayout>
  );
};

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
`;

const Item = styled.div`
  ${typo_h4_semibold};
  color: ${({ theme }) => theme.gray[600]};
  padding: 15px 16px;
  border: 1px solid ${({ theme }) => theme.gray[400]};
  border-radius: 16px;
`;

const BottomSheetContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 40px 0;
`;

const BottomSheetContentItem = styled.div<{ selected: boolean }>`
  ${typo_body3_regular};
  color: ${({ theme, selected }) => (selected ? theme.primaryPurple[500] : theme.gray[500])};
  display: flex;
  justify-content: center;
  padding: 13px 0;
  background-color: ${({ theme, selected }) => (selected ? theme.primaryPurple[100] : theme.gray[100])};
  border-radius: 50px;
`;

export default TaskFeedbackPage;
