const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "numeric",
    weekday: "short",
    day: "numeric",
  };

  return new Intl.DateTimeFormat("ko-KR", options).format(date);
};

export default formatDate;
