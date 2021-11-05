interface Props {
    dialogContent: JSX.Element | null;
    onDialogClose: () => void;
}

const DialogBox = ({ dialogContent, onDialogClose }: Props) => {
    const enabled = dialogContent !== null;

    return (
        <div className={`dialog-box ${enabled ? "enabled" : "disabled"}`}>
            <div className="dialog-box-content">
                <button onClick={() => onDialogClose()}>x</button>
                {dialogContent}
            </div>
        </div>
    );
};

export default DialogBox;
