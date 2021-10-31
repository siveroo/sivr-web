import { ReactComponent as TypescriptSVG } from "../../res/logos/colored/typescript.svg";
import { ReactComponent as PythonSVG } from "../../res/logos/colored/python.svg";
import { ReactComponent as NodeSVG } from "../../res/logos/colored/nodejs.svg";
import { ReactComponent as ReactSVG } from "../../res/logos/colored/react.svg";
import PawnPNG from "../../res/logos/colored/pawn.png";

const logoHeight = "128";

const Skill = () => {
    return (
        <div className="skill">
            <div className="skillTitle">
                <h1>Skill</h1>
            </div>
            <div className="skillIcons">
                <TypescriptSVG width={logoHeight} height={logoHeight} />
                <PythonSVG width={logoHeight} height={logoHeight} />
                <NodeSVG width={logoHeight} height={logoHeight} />
                <ReactSVG width={logoHeight} height={logoHeight} />
                <img
                    src={PawnPNG}
                    alt="Pawn Programming Language"
                    width={logoHeight}
                    height={logoHeight}
                    style={{ objectFit: "scale-down" }}
                />
            </div>
        </div>
    );
};

export default Skill;
