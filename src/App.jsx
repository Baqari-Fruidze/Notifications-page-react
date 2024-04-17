import styled from "styled-components";
import Header from "./components/Header";
import Middle from "./components/Middle";
function App() {
  return (
    <>
      <Container>
        <Header />
        <Middle />
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  padding: 2.4rem 1.6rem 4.5rem;
  background: var(--9---White, #fff);
`;
