import React from "react";
import { Card } from "./card";
import { H3 } from "./headings";

const UnassignedIssues = ({ issues }) => (
    <Card>
        <H3>Unassigned Issues</H3>
        <p>Use <bold>hacktoberfestDublin</bold> label</p>
        <ul>
            {
                issues
                    .filter(el => el.assignee === null)
                    .filter(el => el.state !== 'closed')
                    .map((value, index) => {
                        return (
                            <li key={index}>
                                <a href={value.html_url}>{value.title}</a>
                            </li>
                        );
                    })
            }
        </ul>
        <p><a href="/">Return to the homepage</a></p>
    </Card>
);

export default UnassignedIssues;
