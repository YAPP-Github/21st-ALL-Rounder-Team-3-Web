import Button from "@src/components/common/Button";
import DateForm from "@src/components/common/DateForm";
import DropDown, { DropDownData } from "@src/components/common/DropDown";
import Input from "@src/components/common/Input";
import TextArea from "@src/components/common/TextArea";
import DefaultLayout from "@src/components/layout/DefaultLayout";
import FixedBottomButtonLayout from "@src/components/layout/FixedBottomButtonLayout";
import { typo_body3_regular } from "@src/styles/Typo";
import { useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import styled from "styled-components";

const TEMP_DROPDOWN_DATA = [
  { id: 1, value: "나" },
  { id: 2, value: "은욱" },
  { id: 3, value: "예진" },
  { id: 4, value: "예령" },
  { id: 5, value: "정현" },
  { id: 6, value: "혜리" },
  { id: 7, value: "연수" },
  { id: 8, value: "상록" },
  { id: 9, value: "세희" },
  { id: 10, value: "지율" },
];

const useGetQueryString = () => {
  const [searchParams] = useSearchParams();

  return (key: string) => searchParams.get(key) ?? "";
};

const TaskEditPage = () => {
  const getQueryString = useGetQueryString();

  const dropDownInitialData = {
    id: Number(getQueryString("assigneesId")),
    value: getQueryString("assigneesValue")!,
  };

  const [assignees, setAssignees] = useState<DropDownData>(dropDownInitialData);
  const [title, setTitle] = useState(getQueryString("title"));
  const [memo, setMemo] = useState(getQueryString("memo"));
  const [startDate, setStartDate] = useState<Date>(new Date(getQueryString("startDate")));
  const [dueDate, setDueDate] = useState<Date>(new Date(getQueryString("dueDate")));

  const readyToEdit = !!assignees && !!title && !!startDate && !!dueDate && !!memo;

  console.log(assignees, title, memo, startDate, dueDate);

  return (
    <DefaultLayout onBack={() => {}} title="업무 수정하기">
      <Wrapper>
        <ListWrapper>
          <ListTitleWrapper>
            <ListTitle>업무 담당</ListTitle>
          </ListTitleWrapper>
          <DropDown data={TEMP_DROPDOWN_DATA} onChange={item => setAssignees(item)} />
        </ListWrapper>
        <ListWrapper>
          <ListTitleWrapper>
            <ListTitle>업무 제목</ListTitle>
          </ListTitleWrapper>
          <Input
            value={title}
            placeholder="업무 제목을 입력해주세요."
            maxLength={20}
            onChange={value => setTitle(value)}
          />
        </ListWrapper>
        <ListWrapper>
          <ListTitleWrapper>
            <ListTitle>업무 기간</ListTitle>
          </ListTitleWrapper>
          <DateFormWrapper>
            <DateForm placeholder="시작 날" value={startDate} maxDate={dueDate} onChange={date => setStartDate(date)} />
            ~
            <DateForm placeholder="마지막 날" value={dueDate} minDate={startDate} onChange={date => setDueDate(date)} />
          </DateFormWrapper>
        </ListWrapper>
        <ListWrapper>
          <ListTitleWrapper>
            <ListTitle>업무 내용</ListTitle>
          </ListTitleWrapper>
          <TextArea value={memo} placeholder="업무와 관련한 내용을 작성해주세요." onChange={value => setMemo(value)} />
        </ListWrapper>
      </Wrapper>
      <FixedBottomButtonLayout>
        <Button type="primary" value="생성하기" onClick={() => {}} disabled={!readyToEdit} />
      </FixedBottomButtonLayout>
    </DefaultLayout>
  );
};

const Wrapper = styled.div`
  padding: 40px 16px 0;
`;

const ListWrapper = styled.div`
  margin-bottom: 20px;
`;

const ListTitleWrapper = styled.div`
  margin-bottom: 8px;
`;

const ListTitle = styled.p`
  ${typo_body3_regular};
  color: ${({ theme }) => theme.gray[600]};
`;

const DateFormWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export default TaskEditPage;
