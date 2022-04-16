import HeroSection from "../components/HeroSection/HeroSection";
import HomeSection from "../components/HomeSections/HomeSections";

const Home = () => {
  return (
    <>
      <HeroSection />
      {sectionLists.map((obj) => (
        <HomeSection
          key={obj.name}
          title={obj.title}
          name={obj.name}
          heading={obj.heading}
          description={obj.description}
        >
          {obj.children}
        </HomeSection>
      ))}
    </>
  );
};
export default Home;

const sectionLists = [
  {
    title: "Services Provided by me.",
    name: "Services",
    heading: "Services Provided By Me.",
    description:
      " As a Full Stack Developer, I offer full stack software support using different tools like Reactjs, Nextjs, Nodejs, React Native etc.",
    children: <></>,
  },
  {
    title: "Skills, I currently possess.",
    name: "Skills",
    heading: "Skills, I Currently Possess.",
    description:
      "  I am learnig and growing at the same time. Being a full stack developer, I need to have different skills. Skills that I currently have are listed below, mean while I learn new skills and grow with every project I do.",
    children: <></>,
  },
  {
    title: "Works that I have done.",
    name: "Works",
    heading: "Works That I Have Done.",
    description:
      "I have been consistently delivering great projects with great customers satisfaction. Different Project I have worked on are listed here.",
    children: <></>,
  },
  {
    title: "My Recent Blogs",
    name: "Blogs",
    heading: "My Recent Blogs",
    description:
      " Knowledge sharing is a good habit. It helps every one with similar field to grow with the community. I like to share all the things that I learn. You can check out my blogs listed here.",
    children: <></>,
  },
];
