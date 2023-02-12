import { useState } from "react";
import { Calendar } from "react-calendar";
import styled, { css } from "styled-components";
import "react-calendar/dist/Calendar.css";
import { typo_body1_medium } from "@src/styles/Typo";
import formatDate from "@src/utils/formatDate";

type Props = {
  value: Date | undefined;
  placeholder: string;
  minDate?: Date;
  maxDate?: Date;
  onChange: (date: Date) => void;
};

const DateForm = ({ value, placeholder, minDate, maxDate, onChange }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectDate = (date: Date) => {
    onChange(date);
    setIsOpen(false);
  };

  return (
    <Wrapper>
      <FormWrapper focused={isOpen} onClick={() => setIsOpen(value => !value)}>
        {value ? <Value>{formatDate(value)}</Value> : <Placeholder>{placeholder}</Placeholder>}
      </FormWrapper>
      {isOpen && (
        <CalendarWrapper>
          <Calendar onChange={handleSelectDate} value={value} minDate={minDate} maxDate={maxDate} />
        </CalendarWrapper>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  flex: 1;
`;

const FormWrapper = styled.div<{ focused: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  padding: 8px 8px 8px 12px;
  margin-bottom: 8px;
  background-color: ${({ theme }) => theme.gray[100]};
  border: 1px solid ${({ theme }) => theme.gray[200]};
  border-radius: 8px;
  transition: border 0.2s;

  ${({ focused }) => {
    if (focused) {
      return css`
        border: 1px solid ${({ theme }) => theme.primaryPurple[500]};
      `;
    }
  }}
`;

const Value = styled.p`
  ${typo_body1_medium};
  color: ${({ theme }) => theme.black};
`;

const Placeholder = styled.p`
  ${typo_body1_medium};
  color: ${({ theme }) => theme.gray[400]};
`;

const CalendarWrapper = styled.div`
  position: absolute;
  width: calc(100vw - 36px);
  z-index: 100;
  top: calc(100% + 8px);
  left: 0;

  .react-calendar {
    width: 100%;
  }
`;

export default DateForm;
