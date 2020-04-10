exports.formatDate = date => {
  const time = date.slice(11, 16);
  const day = date.slice(8, 10);
  const month = date.slice(5, 7);
  const year = date.slice(0, 4);
  return `${day}/${month}/${year} - ${time}`;
};
