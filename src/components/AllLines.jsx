import React from "react";
import { Link } from "@reach/router";
import { formatDate } from "../utils";

const AllLines = props => {
  const { lines } = props;

  return (
    <div>
      <h2>Info for all lines</h2>
      <p>Last Updated: {formatDate(lines[0].modified)}</p>
      {lines.map(line => {
        return (
          <div key={line.name}>
            <p>{line.name}</p>
            <p>{line.lineStatuses[0].statusSeverityDescription}</p>
            <Link to={`/${line.id}`}>View More</Link>
          </div>
        );
      })}
    </div>
  );
};

export default AllLines;
