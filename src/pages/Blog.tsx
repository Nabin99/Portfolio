import BlogCards from "../components/BlogCards/BlogCards";
import BlogsDetailed from "../components/BlogsDetailed/BlogsDetailed";

const Blog = () => {
  return (
    <BlogsDetailed
      title="My Blogs"
      description="These are all the blogs I have."
      adminInfo={<></>}
      recentPosts={<></>}
    >
      <BlogCards
        createdAt={new Date()}
        heading="Ten tips for scalable react programming"
        image="/#"
        paragraph="Here, in this section I would like to share my tips and tricks related to the scalable react projects."
      />
    </BlogsDetailed>
  );
};
export default Blog;
