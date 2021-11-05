import { useState } from "react";

import About from "./components/About";
import Header from "./components/Header";
import DialogBox from "./components/UtilityComponents/DialogBox";

import DialogBoxContext from "./components/UtilityComponents/DialogBoxContext";

function App() {
    const [showDialog, setShowDialog] = useState<JSX.Element | null>(null);

    const createDialogBox = (dialog: JSX.Element): void => {
        setShowDialog(dialog);
    };

    const closeDialogBox = (): void => {
        setShowDialog(null);
    };

    return (
        <div className="App">
            <DialogBoxContext.Provider value={createDialogBox}>
                <DialogBox
                    dialogContent={showDialog}
                    onDialogClose={closeDialogBox}
                />
                <Header />
                <About />
            </DialogBoxContext.Provider>
        </div>
    );
}

export default App;
