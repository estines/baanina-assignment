import Layout from "../components/Layout";
import IndexContainer from "../containers/index.container";
import "isomorphic-unfetch";

const Index = props => (
  <Layout>
    <IndexContainer {...props} />
  </Layout>
);

Index.getInitialProps = async ctx => {
  const response = await fetch(
    "https://s3-ap-southeast-1.amazonaws.com/ysetter/media/video-search.json"
  );
  const data = await response.json();
  return { data };
};

export default Index;
