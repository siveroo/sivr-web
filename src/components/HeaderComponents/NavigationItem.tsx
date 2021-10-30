interface NavigationItemProps {
    text: string;
    url: string;
}

const NavigationItem = ({ text, url }: NavigationItemProps) => {
    return (
        <li className={`headerNavigationItem ${text === "About" && "active"}`}>
            <a href={url}>{text}</a>
        </li>
    );
};

export default NavigationItem;
