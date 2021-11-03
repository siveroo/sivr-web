interface ContactProps {
    Logo: React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & { title?: string | undefined }
    >;
    id: string;
    url?: string;
    onClick?: Function;
}

const dummy = () => {};
const logoHeight = "24";

const Contact = ({ Logo, id, url, onClick }: ContactProps) => {
    return (
        <a href={url}>
            <Logo
                className="contactsItem"
                width={logoHeight}
                height={logoHeight}
                onClick={() => (onClick || dummy)()}
                id={id}
            />
        </a>
    );
};

export default Contact;
