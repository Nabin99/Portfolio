import BlogLists from "../components/BlogLists/BlogLists";
import HeroSection from "../components/HeroSection/HeroSection";
import HomeSection from "../components/HomeSections/HomeSections";
import ServiceBox from "../components/ServiceBox/ServiceBox";
import SkillsContainer from "../components/Skills/SkillsContainer";
import WorksBox from "../components/WorksBox/WorksBox";
import SvgProvider from "../constants/SvgProvider";

const Home = () => {
  return (
    <>
      <HeroSection />
      {sectionLists.map((obj) => (
        <HomeSection
          icon={obj.icon}
          key={obj.name}
          title={obj.title}
          name={obj.name}
          heading={obj.heading}
          description={obj.description}
          pageLink={obj.pageLink}
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
    title: "Services I Provide.",
    name: "Services",
    heading: "Services I Provide.",
    description:
      " As a Full Stack Developer, I offer full stack software support using different tools like Reactjs, Nextjs, Nodejs, React Native etc.",
    children: <ServiceBox />,
    icon: SvgProvider.service,
    pageLink: "/about",
  },
  {
    title: "Skills, I currently possess.",
    name: "Skills",
    heading: "Skills, I Currently Possess.",
    description:
      "  I am learnig and growing at the same time. Being a full stack developer, I need to have different skills. Skills that I currently have are listed below, mean while I learn new skills and grow with every project I do.",
    children: <SkillsContainer />,
    icon: SvgProvider.skills,
    pageLink: "/skills",
  },
  {
    title: "Works that I have done.",
    name: "Works",
    heading: "Works That I Have Done.",
    description:
      "I have been consistently delivering great projects with great customers satisfaction. Different Project I have worked on are listed here.",
    children: <WorksBox />,
    icon: SvgProvider.work,
    pageLink: "/works",
  },
  {
    title: "My Recent Blogs",
    name: "Blogs",
    heading: "My Recent Blogs",
    description:
      " Knowledge sharing is a good habit. It helps every one with similar field to grow with the community. I like to share all the things that I learn. You can check out my blogs listed here.",
    children: <BlogLists />,
    icon: SvgProvider.blog,
    pageLink: "/blog",
  },
];
