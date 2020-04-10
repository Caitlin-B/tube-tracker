import React from "react";
import { formatDate } from "../utils";

const SingleLine = props => {
  const { lines, line } = props;

  const lineInfo = lines.filter(eachLine => {
    return eachLine.id === line;
  });

  return (
    <div>
      <h2>{lineInfo[0].name}</h2>
      <p>Last Updated: {formatDate(lineInfo[0].modified)}</p>
      <p>{lineInfo[0].lineStatuses[0].reason}</p>
    </div>
  );
};

export default SingleLine;
