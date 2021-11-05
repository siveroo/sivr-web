import { ReactComponent as StackSVG } from "../../res/animated-stack.svg";

const Introduction = () => {
    return (
        <>
            <div className="introduction">
                <h1>Hi, I’m a Full Stack Web Developer</h1>
                <p>
                    I am a student from Indonesia. Currently practicing web
                    development.
                </p>
                <p>
                    I started learning basic vanilla HTML, CSS, and JavaScript
                    in the middle of 2021. Then, i started to learn how to use a
                    framework/library, mainly React.js, which is the library
                    that i used to make this website.
                </p>
                <p>
                    Outside of web development, sometimes i’d like to code with
                    other programming languages such as Python, C++, and Pawn.
                </p>
            </div>
            <StackSVG />
        </>
    );
};

export default Introduction;
