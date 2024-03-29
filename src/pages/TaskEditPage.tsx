import Button from "@src/components/common/Button";
import DateForm from "@src/components/common/DateForm";
import DropDown, { DropDownData } from "@src/components/common/DropDown";
import Input from "@src/components/common/Input";
import TextArea from "@src/components/common/TextArea";
import DefaultLayout from "@src/components/layout/DefaultLayout";
import FixedBottomButtonLayout from "@src/components/layout/FixedBottomButtonLayout";
import useParticipantsQuery from "@src/core/queries/useParticipantsQuery";
import useTaskEditMutation from "@src/core/queries/useTaskEditMutation";
import { typo_body3_regular } from "@src/styles/Typo";
import { formatPayloadDate } from "@src/utils/formatDate";
import { useMemo, useState } from "react";
import { useSearchParams, useParams } from "react-router-dom";
import styled from "styled-components";

const TaskEditPage = () => {
  const [location] = useSearchParams();

  const [taskManager, setTaskManager] = useState<DropDownData>();
  const [title, setTitle] = useState(location.get("title")!);
  const [memo, setMemo] = useState(location.get("memo")!);
  const [startDate, setStartDate] = useState<Date>(new Date(location.get("startDate") as string));
  const [dueDate, setDueDate] = useState<Date>(new Date(location.get("dueDate") as string));

  const { projectId, taskId } = useParams();
  const { data } = useParticipantsQuery(projectId || "");
  const { mutate } = useTaskEditMutation();

  console.log("!!!", data, projectId);
  const dropDownData = data ? data?.map(item => ({ id: item.id, value: item.name })) : [{ id: 0, value: "" }];

  const readyToCreate = !!taskManager && !!title && !!startDate && !!dueDate && !!memo;

  const handleBackClick = () => {
    window.Android.navigateToMyTask(projectId!, taskId!);
  };

  const handleCreateClick = () => {
    if (taskId && readyToCreate) {
      mutate(
        {
          taskId,
          participantId: taskManager.id,
          title,
          memo,
          startDate: formatPayloadDate(startDate),
          dueDate: formatPayloadDate(dueDate),
        },
        {
          onSettled: () => {
            handleBackClick();
          },
        },
      );
    }
  };

  return (
    <DefaultLayout onBack={handleBackClick} title="업무 수정하기">
      <Wrapper>
        <ListWrapper>
          <ListTitleWrapper>
            <ListTitle>업무 담당</ListTitle>
          </ListTitleWrapper>
          <DropDown data={dropDownData} initialData={dropDownData[0]} onChange={item => setTaskManager(item)} />
        </ListWrapper>
        <ListWrapper>
          <ListTitleWrapper>
            <ListTitle>업무 제목</ListTitle>
          </ListTitleWrapper>
          <Input
            value={title}
            placeholder="업무 제목을 입력해주세요."
            withError={true}
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
        <Button type="primary" value="수정하기" onClick={handleCreateClick} disabled={!readyToCreate} />
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
