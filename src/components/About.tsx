import Introduction from "./AboutComponents/Introduction";
import Skill from "./AboutComponents/Skill";
import Socials from "./AboutComponents/Socials";

const About = () => {
    return (
        <div className="about" id="about">
            <Socials />
            <Introduction />
            <Skill />
        </div>
    );
};

export default About;
