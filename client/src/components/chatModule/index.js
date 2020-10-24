import React from "react";
import MessageFeed from "../messagefeed";
import TextBox from "../textbox";

function ChatModule() {
    return(
        <div className={'card m-5 h-100 flex-grow-1 rounded-0'}>
            <div className={'card m-5 h-100 flex-grow-1 rounded-0 border-0'}>
                <MessageFeed />
                <TextBox />
            </div>
        </div>
    );
}

export default ChatModule;