import styled from "styled-components";
import React from "react";
import data from "../data.json";
import { useState } from "react";

export default function Middle({
  id,
  username,
  profilePic,
  action,
  post,
  time,
  isRead,
  groupName,
  text,
  info,
  setInfo,
  userPicture,
}) {
  function foo() {
    let mapped = info.map((item, index) => {
      if (id === index + 1) {
        item.isRead = true;
      }
      return item;
    });
    setInfo(mapped);
  }
  console.log(userPicture);
  return (
    <Persons onClick={foo} $isRead={isRead}>
      <img src={profilePic} alt="" />
      <div>
        <span className="person-username">{username}</span>
        <span className="person-action">{action}</span>
        <span className="person-groupName">{groupName}</span>
        <span className="person-Post">{post}</span>
        {!isRead ? <Rounded></Rounded> : null}
        <p className="persons-Time">{time}</p>
        {text ? <p className="person-text">{text}</p> : null}
        {userPicture ? <img src={userPicture} alt="" /> : null}
      </div>
    </Persons>
  );
}

const InsideDiv = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  gap: 0.8rem;
  flex-direction: row;
`;

const Rounded = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  background: var(--2---Red, #f65552);
  display: inline-block;
  margin-left: 0.8rem;
  border-radius: 50%;
`;
const Persons = styled.div`
  border-radius: 8px;
  background: ${(props) =>
    props.$isRead ? `var(--9---White, #FFF)` : `var(--8---Snow, #F7FAFD)`};
  padding: 1.6rem;
  display: flex;
  gap: 1.3rem;
  & .person-username {
    color: var(--3---Very-Dark-Grey-Blue, #1c202b);
    font-family: "Plus Jakarta Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }
  & .person-username:hover {
    cursor: pointer;
  }
  & .person-action {
    color: var(--4---Dark-Grey-Blue, #5e6778);
    font-family: "Plus Jakarta Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    display: inline;
    margin-left: 0.6rem;
  }
  & .person-action:hover {
    cursor: pointer;
  }
  & .person-groupName {
    color: var(--1---Blue, #0a327b);
    font-family: "Plus Jakarta Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left: 0.6rem;
  }
  & .person-groupName:hover {
    cursor: pointer;
  }

  & img {
    width: 3.9rem;
    height: 3.9rem;
  }
  & .person-Post {
    color: var(--4---Dark-Grey-Blue, #5e6778);
    font-family: "Plus Jakarta Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: inline;
  }
  & .person-Post:hover {
    cursor: pointer;
  }
  & .persons-Time {
    color: var(--5---Grey-Blue, #939cad);
    font-family: "Plus Jakarta Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  & .persons-Time:hover {
    cursor: pointer;
  }

  & .person-text {
    color: var(--4---Dark-Grey-Blue, #5e6778);
    font-family: "Plus Jakarta Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding: 1.6rem;
    border: 1px solid grey;
    margin-top: 1.2rem;
  }
  & .person-text:hover {
    cursor: pointer;
  }
`;
