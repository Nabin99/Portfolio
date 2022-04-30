import BlogCards from "../components/BlogCards/BlogCards";
import BlogsPageLayout from "../components/BlogsPageLayout/BlogsPageLayout";

const Blog = () => {
  return (
    <BlogsPageLayout
      title="My Blogs"
      description="These are all the blogs I have."
      adminInfo={<></>}
      recentPosts={<></>}
    >
      <>
        <BlogCards
          createdAt={new Date()}
          heading="Ten tips for scalable react programming"
          image="/#"
          paragraph="Here, in this section I would like to share my tips and tricks related to the scalable react projects.Here, in this section I would like to share my tips and tricks related to the scalable react projects."
        />
        <BlogCards
          createdAt={new Date()}
          heading="Ten tips for scalable react programming"
          image="/#"
          paragraph="Here, in this section I would like to share my tips and tricks related to the scalable react projects.Here, in this section I would like to share my tips and tricks related to the scalable react projects."
        />
      </>
    </BlogsPageLayout>
  );
};
export default Blog;
