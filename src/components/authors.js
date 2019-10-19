import React from "react";
import styled from "styled-components";
import { Card } from "./card";
import { H3 } from "./headings";

const Img = styled.img`
  width: 40px;
  border-radius: 50%;
  margin: 0;
  margin-right: 16px;
`;


const Authors = ({ authors }) => {
    const unique = [...new Set(authors.map(item => item.user.avatar_url))];
    
    return <Card>
        <H3>All Authors</H3>
        {unique.map((value, index) => {
            // TODO group by user login
            // TODO Limit top 5 authors
            const img = value;
            return (
                <a
                    key={index}
                    style={{ display: "inline-block", alignItems: "center" }}
                    href={value}
                >
                    <Img src={img} />
                </a>
            );
        })}
    </Card>
};

export default Authors;
