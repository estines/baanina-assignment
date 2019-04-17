import styled from "styled-components";

const Layout = props => (
  <Container>
    <Header>
      <h1>Video Search Result</h1>
    </Header>
    {props.children}
  </Container>
);

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Header = styled.div`
  padding: 15px;
  background: grey;
`;

export default Layout;
