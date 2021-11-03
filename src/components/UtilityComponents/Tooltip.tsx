interface TooltipProps {
    className?: string;
    position: "bottom" | "top";
    children: React.DetailedHTMLProps<any, any>;
}

const Tooltip = ({ className, position, children }: TooltipProps) => {
    return (
        <div className={`tooltip ${position} ${className || ""}`}>
            {children}
        </div>
    );
};

export default Tooltip;
