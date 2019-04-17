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

// const Flex = styled.div`
//   display: flex;
//   justify-content: ${props => props.justify};
//   align-items: ${props => props.align};
//   flex-direction: ${props => props.direction};
//   width: ${props => props.width};
//   height: ${props => props.height};
// `;

export default Layout;
