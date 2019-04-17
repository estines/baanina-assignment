import Video from "../components/Video";
import { Flex } from "../components/common";

const IndexContainer = ({ data }) => {
  return (
    <Flex width="100%" height="100%" wrap="wrap">
      {data.items.map((item, index) => {
        return (
          <Video
            key={item.id.videoId + index}
            videoId={item.id.videoId}
            title={item.snippet.title}
            description={item.snippet.description}
          />
        );
      })}
    </Flex>
  );
};

export default IndexContainer;
