import styled from "styled-components";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Container>
        <Header />
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  padding: 2.4rem 1.6rem 4.5rem;
  background: var(--9---White, #fff);
`;
