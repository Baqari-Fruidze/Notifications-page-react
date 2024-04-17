import styled from "styled-components";
import Header from "./components/Header";
import Middle from "./components/Middle";
import data from "./data.json";

function App() {
  console.log(data);
  return (
    <>
      <Container>
        <Header />
        {data.map((item) => (
          <Middle
            id={item.id}
            username={item.username}
            profilePic={item.profilePic}
            action={item.action}
            post={item.post}
            time={item.time}
            isRead={item.isRead}
          />
        ))}
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  padding: 2.4rem 1.6rem 4.5rem;
  background: var(--9---White, #fff);
`;
