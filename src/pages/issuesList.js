import React from 'react';

const IssuesList = ({ issues }) => (
  <ul>
    {issues.map((value, index) => {
      return <li key={index}>{value.title}</li>
    })}
  </ul>
)

export default IssuesList
