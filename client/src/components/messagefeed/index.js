import React, {useState} from "react";
import io from "socket.io-client";

function MessageFeed(props) {
    const [messages, setMessages] = useState([]);

    const socket = io('//localhost:5000');
    socket.on('recieve', function (data) {
        setMessages(messages.concat(<p className='card-text' key={messages.length}>{data}</p>));
    });


    return (
        <div className="card border-secondary mb-3 flex-grow-1 rounded-0">
            <div className="card-header rounded-0">Chat Room</div>
            <div className={'card h-100 flex-grow-1 overflow-auto '}>
                <div className="card-body d-flex flex-shrink-0">
                    <div className='card-text '>
                        <div className="position-absolute">
                            {messages}
                        </div>
                    </div>
                </div>
            </div>

        </div>


    );
}

export default MessageFeed;