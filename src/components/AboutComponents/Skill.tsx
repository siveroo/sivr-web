import { ReactComponent as TypescriptSVG } from "../../res/logos/colored/typescript.svg";
import { ReactComponent as PythonSVG } from "../../res/logos/colored/python.svg";
import { ReactComponent as NodeSVG } from "../../res/logos/colored/nodejs.svg";
import { ReactComponent as ReactSVG } from "../../res/logos/colored/react.svg";
import PawnPNG from "../../res/logos/colored/pawn.png";
import Tooltip from "../UtilityComponents/Tooltip";

const logoHeight = "128";

const Skill = () => {
    return (
        <div className="skill">
            <div className="skillTitle">
                <h2>Skill</h2>
            </div>
            <div className="skillIcons">
                <div className="wrapper">
                    <TypescriptSVG width={logoHeight} height={logoHeight} />
                    <Tooltip position="bottom">
                        <span className="tooltip-title">
                            <TypescriptSVG width="24" height="24" />
                            <h3>TypeScript</h3>
                        </span>
                        <p>
                            I usually use TypeScript as a replacement to vanilla
                            JavaScript. Mainly because of it is strongly typed.
                            <br />
                            <br />
                            However, i do still write TypeScript code in
                            JavaScript style because i still haven't got used to
                            it
                        </p>
                    </Tooltip>
                </div>

                <div className="wrapper">
                    <PythonSVG width={logoHeight} height={logoHeight} />
                    <Tooltip position="bottom">
                        <span className="tooltip-title">
                            <PythonSVG width="24" height="24" />
                            <h3>Python</h3>
                        </span>
                        <p>
                            Python is a really nice language to get something
                            done quickly. I often use it as a scripting language
                            for a simple automation for a repetitive task like
                            Web Scrapping.
                            <br />
                            <br />I also used it to make a high fps video
                            resampler program, called HFR-Resampler. Mainly
                            because my old laptop is too slow to resample a high
                            fps video.
                        </p>
                    </Tooltip>
                </div>
                <div className="wrapper">
                    <NodeSVG width={logoHeight} height={logoHeight} />
                    <Tooltip position="bottom">
                        <span className="tooltip-title">
                            <NodeSVG width="24" height="24" />
                            <h3>Node.js</h3>
                        </span>
                        <p>
                            Every projects that i made related to Web
                            Development/IoT usually involve Node.js. I use it
                            for the backend of my projects.
                        </p>
                    </Tooltip>
                </div>
                <div className="wrapper">
                    <ReactSVG width={logoHeight} height={logoHeight} />
                    <Tooltip position="bottom">
                        <span className="tooltip-title">
                            <ReactSVG width="24" height="24" />
                            <h3>React</h3>
                        </span>
                        <p>
                            I use React for the frontend of my projects.
                            <br />
                            <br />
                            Currently still learning it.
                        </p>
                    </Tooltip>
                </div>
                <div className="wrapper">
                    <img
                        src={PawnPNG}
                        alt="Pawn Programming Language"
                        width={logoHeight}
                        height={logoHeight}
                        style={{ objectFit: "scale-down" }}
                    />
                    <Tooltip position="bottom">
                        <span className="tooltip-title">
                            <img
                                src={PawnPNG}
                                alt="Pawn Programming Language"
                                width="24"
                                height="24"
                                style={{ objectFit: "scale-down" }}
                            />
                            <h3>Pawn</h3>
                        </span>
                        <p>
                            Before started learning Web Development, i was a
                            developer on a Counter-Strike 1.6 server, which uses
                            plugins that was written in Pawn.
                            <br />
                            <br />
                            It's syntax is kinda similar to C/C++, but simpler
                            and easier to work with rather than actual C/C++.
                        </p>
                    </Tooltip>
                </div>
            </div>
        </div>
    );
};

export default Skill;
