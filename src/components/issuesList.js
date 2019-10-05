import React from "react";
import { Card } from "./card";
import { H3 } from "./headings";

const IssuesList = ({ issues }) => (
  <Card>
    <H3>Unassigned Issues</H3>
    <p>use hacktoberfestDublin label</p>
    <ul>
      {issues
        .filter(el => el.assignee === null)
        .map((value, index) => {
          return (
            <li key={index}>
              <a href={value.html_url}>{value.title}</a>
            </li>
          );
        })}
    </ul>
  </Card>
);

export default IssuesList;
