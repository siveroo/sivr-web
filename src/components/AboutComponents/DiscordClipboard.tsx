import { ReactComponent as CopySVG } from "../../res/icons/copy.svg";

const discordOnClick = (discordTag: string): void => {
    navigator.clipboard.writeText(discordTag);
};

const DiscordClipboard = () => {
    const discordTag = "siveroo#0550";
    return (
        <div>
            <h3 className="discord-clipboard-title">Discord Tag</h3>
            <div className="discord-clipboard-body">
                <span>{discordTag}</span>
                <CopySVG
                    width="32px"
                    height="32px"
                    onClick={() => discordOnClick(discordTag)}
                />
            </div>
        </div>
    );
};

export default DiscordClipboard;
