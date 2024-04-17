import styled from "styled-components";
import React from "react";

export default function Middle({
  id,
  username,
  profilePic,
  action,
  post,
  time,
  isRead,
}) {
  return (
    <Persons>
      <img src={profilePic} alt="" />
      <div>
        <span>{username}</span>
        <p>{action}</p>
        <p className="person-Post">{post}</p>
        <p className="persons-Time">{time}</p>
      </div>
    </Persons>
  );
}

const Persons = styled.div`
  border-radius: 8px;
  background: var(--8---Snow, #f7fafd);
  padding: 1.6rem;
  display: flex;
  gap: 1.3rem;
  .person-post {
    color: var(--4---Dark-Grey-Blue, #5e6778);
    font-family: "Plus Jakarta Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left: 0.6rem;
  }
  .persons-Time {
    color: var(--5---Grey-Blue, #939cad);
    font-family: "Plus Jakarta Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  & img {
    width: 13%;
  }
  & span {
    color: var(--3---Very-Dark-Grey-Blue, #1c202b);
    font-family: "Plus Jakarta Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    color: #1c202b;
    margin-right: 0.6rem;
  }
  & p:last-child {
    display: inline;
    color: var(--4---Dark-Grey-Blue, #5e6778);
    font-family: "Plus Jakarta Sans";
    font-size: 14px;
    font-weight: 500;
    color: #5e6778;
    background-color: red;
  }
`;
