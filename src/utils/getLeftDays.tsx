const getLeftDays = (dueDate: string) => {
  if (!dueDate) {
    return 0;
  }
  const dueTime = new Date(dueDate).getTime();
  const currentTime = new Date().getTime();

  return Math.floor((dueTime - currentTime) / (24 * 60 * 60 * 1000));
};

export default getLeftDays;
