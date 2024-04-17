import styled from "styled-components";
import React from "react";
import data from "../data.json";

export default function Middle() {
  console.log(data);
  return (
    <Persons>
      {data.map((el) => (
        <p>{el.profilePic}</p>
      ))}
    </Persons>
  );
}

const Persons = styled.div`
  border-radius: 8px;
  background: var(--8---Snow, #f7fafd);
  padding: 1.6rem;
`;
