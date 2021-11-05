import { createContext } from "react";

const DialogBoxContext = createContext((dialog: JSX.Element): void => {});

export default DialogBoxContext;
