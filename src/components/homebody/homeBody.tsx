import BlogSection from "./blogSection/blogSection";
import HeroSection from "./heroSection";
import ServiceSection from "./serviceSection/service";
import SkillsSection from "./skills/skills";
import WorksSection from "./works/works";


const HomeBody = () => {
  return (
    <>
    <HeroSection/>
    <ServiceSection/>
    <SkillsSection/>
    <WorksSection/>
    <BlogSection/>
    </>
  )
}

export default HomeBody;