const getFeedbackLeftDays = (date: string) => {
  if (!date) {
    return 0;
  }
  const feedbackDueTime = new Date(date).getTime();
  const currentTime = new Date().getTime();

  return Math.floor((feedbackDueTime - currentTime) / (24 * 60 * 60 * 1000));
};

export default getFeedbackLeftDays;
