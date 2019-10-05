import React from "react";
import styled from "styled-components";
import { Card } from "./card";

const Img = styled.img`
  width: 40px;
  border-radius: 50%;
  margin: 0;
  margin-right: 16px;
`;

const TopAuthors = ({ pull_requests }) => (
  <Card>
    <h3>Top Authors</h3>
    {pull_requests.map((value, index) => {
      // TODO group by user login
      const img = value.user.avatar_url;
      return (
        <a
          key={index}
          style={{ display: "flex", alignItems: "center" }}
          href={value.user.html_url}
        >
          <Img src={img} />
          {value.user.login}
        </a>
      );
    })}
  </Card>
);

export default TopAuthors;
