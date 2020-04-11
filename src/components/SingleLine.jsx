import React from "react";
import { Link } from "@reach/router";
import styles from "../styles/SingleLine.module.css";

const SingleLine = props => {
  const { lines, line } = props;

  const lineInfo = lines.filter(eachLine => {
    return eachLine.id === line;
  });

  return (
    <div className={styles.lineInfoBody}>
      <h2>{lineInfo[0].name}</h2>
      <p className={styles.lineStatusReason}>
        {lineInfo[0].lineStatuses[0].reason}
      </p>
      <Link to="/travel">Go Back</Link>
    </div>
  );
};

export default SingleLine;
