export const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "numeric",
    weekday: "short",
    day: "numeric",
  };

  return new Intl.DateTimeFormat("ko-KR", options).format(date);
};

export const formatPayloadDate = (date: Date) => {
  const leftPad = (value: number) => {
    return value < 10 ? `0${value}` : value;
  };

  const yyyy = date.getFullYear();
  const mm = leftPad(date.getMonth() + 1);
  const dd = leftPad(date.getDate());

  return `${yyyy}-${mm}-${dd}`;
};
