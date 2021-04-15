const getHumanizedDate = (isoString) => {
  const dateInstance = new Date(isoString);
  const month = dateInstance.toLocaleString("default", { month: "long" });
  const year = dateInstance.getFullYear();
  const date = dateInstance.getDate();

  return `${month} ${date}, ${year}`;
};

export { getHumanizedDate };
