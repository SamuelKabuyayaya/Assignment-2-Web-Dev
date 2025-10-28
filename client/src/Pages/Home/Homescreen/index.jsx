//This imports all individual section components that will be displayed on the main page
import HeroSection from "../HeroSection";
import AboutMe from "../AboutMe";
import MySkills from "../MySkills";
import Projects from "../Projects";
import Education from "../Education";
import Services from "../Services";
import ContactMe from "../ContactMe";

//This is my main page layout
export default function Home () {
    return(
        <>
           <HeroSection/>
           <AboutMe/> 
           <MySkills/>
           <Projects/>
           <Education/>
           <Services/>
           <ContactMe/>
        </>
    )
}