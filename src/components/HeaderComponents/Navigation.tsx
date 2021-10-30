import NavigationItem from "./NavigationItem";

const Navigation = () => {
    return (
        <ul className="headerNavigation">
            <NavigationItem text="About" url="#about" />
            <NavigationItem text="Projects" url="#projects" />
            <NavigationItem text="Blog" url="#blog" />
        </ul>
    );
};

export default Navigation;
