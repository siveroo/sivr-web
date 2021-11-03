import profilePic from "../../res/profile-pic.jpg";
import Contact from "./Contact";

import { ReactComponent as TwitterLogo } from "../../res/logos/twitter.svg";
import { ReactComponent as GithubLogo } from "../../res/logos/github.svg";
import { ReactComponent as LinkedInLogo } from "../../res/logos/linkedin.svg";
import { ReactComponent as DiscordLogo } from "../../res/logos/discord.svg";

const discordOnClick = (discordTag: string): void => {
    navigator.clipboard.writeText(discordTag);
};

const Socials = () => {
    return (
        <div className="socials">
            <img src={profilePic} width="270" height="270" alt="Profile" />
            <div className="contacts">
                <Contact
                    Logo={TwitterLogo}
                    url="https://www.twitter.com/siverooo"
                    id="socials-twitter-svg"
                />
                <Contact
                    Logo={GithubLogo}
                    url="https://www.github.com/siveroo"
                    id="socials-github-svg"
                />
                <Contact
                    Logo={LinkedInLogo}
                    url="https://www.linkedin.com/in/dwi-andhika-380017201/"
                    id="socials-linkedin-svg"
                />
                <Contact
                    Logo={DiscordLogo}
                    onClick={() => discordOnClick("siveroo#0550")}
                    id="socials-discord-svg"
                />
            </div>
        </div>
    );
};

export default Socials;
