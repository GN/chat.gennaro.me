import React, {useEffect, useState} from "react";

function MessageFeed(props) {
    const [oldMessages, setOldMessages] = useState([]);

    return (
        <div className="card border-secondary mb-3 flex-grow-1 rounded-0">
            <div className="card-header rounded-0">Chat Room</div>
            <div className={'card h-100 flex-grow-1 overflow-auto '}>
                <div className="card-body d-flex flex-shrink-0">
                    <div className='card-text '>
                        <div className="position-absolute">
                            {props.messages}
                        </div>
                    </div>
                </div>
            </div>

        </div>


    );
}

export default MessageFeed;