import React, {useState} from 'react';
import TextBox from "./components/textbox";
import Header from "./components/header";
import MessageFeed from "./components/messagefeed";

function App() {

    const[name, setName] = useState("Gennaro Napolitano");

    return (
        <>
            <Header/>
            <MessageFeed name={name}/>
            <TextBox name={name} setName={setName}/>
        </>
    );
}

export default App;
