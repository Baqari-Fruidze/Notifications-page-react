import styled from "styled-components";
import Header from "./components/Header";
import Middle from "./components/Middle";
import data from "./data.json";
import { useState } from "react";

function App() {
  const [info, setInfo] = useState(data);
  return (
    <>
      <Container>
        <Header />
        {info.map((item) => {
          return (
            <Middle
              id={item.id}
              username={item.username}
              profilePic={item.profilePic}
              action={item.action}
              post={item.post}
              time={item.time}
              isRead={item.isRead}
              groupName={item.groupName}
              text={item.text}
              info={info}
              setInfo={setInfo}
            />
          );
        })}
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  padding: 2.4rem 1.6rem 4.5rem;
  background: var(--9---White, #fff);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
