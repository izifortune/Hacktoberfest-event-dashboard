import React from 'react';
import styled from 'styled-components';
import { Card } from './card';
import { H3 } from './headings';

const Img = styled.img`
  width: 40px;
  border-radius: 50%;
  margin: 0;
  margin-right: 16px;
`;

const TopAuthors = ({ pull_requests }) => {
  if (pull_requests !== []) {
    return (
      <Card>
        <H3>Top Authors</H3>
        {pull_requests.map((value, index) => {
          // TODO group by user login
          // TODO Limit top 5 authors
          const img = value.user.avatar_url;
          return (
            <a
              key={index}
              style={{ display: 'flex', alignItems: 'center' }}
              href={value.user.html_url}
            >
              <Img src={img} />
              {value.user.login}
            </a>
          );
        })}
      </Card>
    );
  } else {
    return (
      <Card>
        <H3>Top Authors</H3>
        <p>No authors contributed to this project so far.</p>
      </Card>
    );
  }
};

export default TopAuthors;
