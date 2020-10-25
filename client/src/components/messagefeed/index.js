import React, {useEffect, useState} from "react";

function MessageFeed(props) {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const handle = (message) => {setMessages(messages.concat(<tr key={messages.length}><td>{message}</td></tr>))}

        // props.socket.on('receive', function(message){
        //     setMessages(messages.concat(<p className='card-text' key={messages.length}>{message}</p>));
        // });
        // return()=>{
        //     props.socket.on('receive', function(message){
        //         setMessages(messages.concat(<p className='card-text' key={messages.length}>{message}</p>));
        //     });
        // }
        props.socket.on('receive', handle);
        return () => {props.socket.off('receive', handle);}

    },[messages]);

    return (
        <div className="card border-secondary mb-3 flex-grow-1 rounded-0">
            <div className="card-header rounded-0">Chat Room</div>
            <div className={'card h-100 flex-grow-1 overflow-auto '}>
                <div className="card-body d-flex flex-shrink-0">
                    <div className='card-text '>
                        <div className="position-absolute">
                            <table>
                                <tbody>
                                {messages}
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>

        </div>


    );
}

export default MessageFeed;