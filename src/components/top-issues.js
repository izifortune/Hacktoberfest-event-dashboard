import React from "react";
import { Card } from "./card";
import { H3 } from "./headings";

const MAX_DISPLAY_ISSUES = 10;
// TODO Empty state
const TopIssues = ({ issues }) => (
    <Card>
        <H3>Unassigned Issues</H3>
        <p>Use hacktoberfestDublin label</p>
        <ul>
            {
                issues
                    .filter(el => el.assignee === null)
                    .filter(el => el.state !== 'closed')
                    .slice(0, MAX_DISPLAY_ISSUES)
                    .map((value, index) => {
                        return (
                            <li key={index}>
                                <a href={value.html_url}>{value.title}</a>
                            </li>
                        );
                    })
            }
        </ul>
        <p><a href="/unassigned-issues">See all unassigned issues</a></p>

    </Card>
);

export default TopIssues;
