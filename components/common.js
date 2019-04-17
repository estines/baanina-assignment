import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  flex-direction: ${props => props.direction};
  width: ${props => props.width};
  height: ${props => props.height};
  flex-wrap: ${props => props.wrap};
`;
