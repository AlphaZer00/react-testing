import { useState } from "react";

const App = () => {
    const [heading, setHeading] = useState("Magnificent Monkeys");

    const handleClick = () => {
        setHeading("Radical Rhinos");
    };

    return (
        <>
            <button type="button" onClick={handleClick}>
                Click here
            </button>
            <h1>{heading}</h1>
        </>
    );
};

export default App;
