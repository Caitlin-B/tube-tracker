import React from "react";
import { Link } from "@reach/router";
import Table from "react-bootstrap/Table";
import styles from "../styles/AllLines.module.css";

const AllLines = props => {
  const { lines } = props;

  return (
    <div>
      <div className={styles.tableContainer}>
        <Table
          className={styles.allLinesTable}
          striped
          bordered
          hover
          size="sm">
          <thead className={styles.tableHead}>
            <tr>
              <th>Line</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {lines.map(line => {
              return (
                <tr key={line.name} >
                  <td className={styles[line.id]}>{line.name}</td>
                  <td className={styles["severity"+line.lineStatuses[0].statusSeverity]}>{line.lineStatuses[0].statusSeverityDescription}</td>
                  <td>
                    <Link to={`/travel/${line.id}`}>View More</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AllLines;
