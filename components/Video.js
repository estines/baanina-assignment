import styled from "styled-components";
import Youtube from "react-youtube";

const Video = ({ videoId, title, description }) => (
  <Card key={videoId}>
    <Youtube videoId={videoId} opts={{ width: "100%", height: "350px" }} />
    <Title>{title}</Title>
    <Description>{description}</Description>
  </Card>
);

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
  width: calc(33vw - 60px);
  height: 400px;

  @media (max-width: 1365px) {
    width: calc(50vw - 60px);
    margin: 30px;
  }

  @media (max-width: 1023px) {
    width: calc(100vw - 60px);
    margin: 30px;
  }
`;

const Title = styled.p`
  margin-bottom: 0;
`;

const Description = styled.span`
  color: gray;
`;

export default Video;
