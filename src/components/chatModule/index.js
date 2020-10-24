import React, {useState} from "react";
import MessageFeed from "../messagefeed";
import TextBox from "../textbox";


function ChatModule(props) {
    const[messages, setMessages] = useState([]);

    function addMessage(message){
        setMessages(messages.concat(<p className='card-text' key={messages.length}>{message}</p>));
    }

    return(
        <div className={'card m-5 h-100 flex-grow-1 rounded-0'}>
            <div className={'card m-5 h-100 flex-grow-1 rounded-0 border-0'}>
                <MessageFeed messages={messages}/>
                <TextBox addMessage={addMessage}/>
            </div>
        </div>
    );
}

export default ChatModule;