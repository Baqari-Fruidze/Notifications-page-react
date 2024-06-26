import styled from "styled-components";
import React from "react";
import { useState } from "react";

export default function Header({ info, setInfo, isRead }) {
  const count = info.reduce((acc, item) => (!item.isRead ? acc + 1 : acc), 0);
  function foo() {
    let mapped = info.map((item) => {
      return { ...item, isRead: true };
    });
    setInfo(mapped);
  }
  return (
    <HeaderCon>
      <div>
        <p>Notifications</p>
        <div>{count}</div>
      </div>
      <p onClick={foo} isRead={isRead}>
        Mark all as read
      </p>
    </HeaderCon>
  );
}
const HeaderCon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.4rem;
  & p {
    color: var(--4---Dark-Grey-Blue, #5e6778);
    text-align: right;
    font-family: "Plus Jakarta Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  & div {
    display: flex;
    gap: 0.9rem;
    align-items: center;
    & p {
      color: var(--3---Very-Dark-Grey-Blue, #1c202b);
      font-size: 20px;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
    }
    & div {
      width: 3.2rem;
      height: 2.5rem;
      border-radius: 6px;
      background: var(--1---Blue, #0a327b);
      color: var(--9---White, #fff);
      font-feature-settings: "clig" off, "liga" off;
      font-family: "Plus Jakarta Sans";
      font-size: 16px;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
      justify-content: center;
    }
  }
`;
