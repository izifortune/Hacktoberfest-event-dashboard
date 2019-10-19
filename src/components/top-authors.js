import React from "react";
import styled from "styled-components";
import { Card } from "./card";
import { H3 } from "./headings";

// const Img = styled.img`
//   width: 40px;
//   border-radius: 50%;
//   margin: 0;
//   margin-right: 16px;
// `;

const TopAuthors = ({ pull_requests }) => {
  function foo(arr) {
    var a = [], b = [], prev;

    arr.sort();
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] !== prev) {
        a.push(arr[i]);
        b.push(1);
      } else {
        b[b.length - 1]++;
      }
      prev = arr[i];
    }

    return [a, b];
  }

  const result = foo(pull_requests.map(pr => pr.user.login));
  const finalResult = [{}]
  
  result[0].forEach((oneResult, index ) => {
    finalResult[index] = {
      login: oneResult
    };
  });

  result[1].forEach((oneResult, index) => {
    finalResult[index].count = oneResult
  });


  let a = finalResult.sort((a,b) => {
    return parseFloat(a.count) - parseFloat(b.count);
  });

  return <Card>
    <H3>Top Authors</H3>
    {a.reverse().map((value, index) => {
      // TODO group by user login
      // TODO Limit top 5 authors
      // const img = value.user.avatar_url;
      return (
        <a
          key={index}
          style={{ display: "flex", alignItems: "center" }}
          href='#'
        >
          {/* <Img src={img} /> */}
          {value.login}
        </a>
      );
    })}
  </Card>
};

export default TopAuthors;
