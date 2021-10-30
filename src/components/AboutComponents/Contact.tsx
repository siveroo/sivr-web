interface ContactProps {
    Logo: React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & { title?: string | undefined }
    >;
    url?: string;
    onClick?: Function;
}

const dummy = () => {};
const logoHeight = "24";

const Contact = ({ Logo, url, onClick }: ContactProps) => {
    return (
        <a href={url}>
            <Logo
                className="contactsItem"
                width={logoHeight}
                height={logoHeight}
                onClick={() => (onClick || dummy)()}
            />
        </a>
    );
};

export default Contact;
