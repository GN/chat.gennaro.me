import React from "react";

function MessageFeed(props) {

    return(
        <h2 className={'text-center p-5'}>{props.name}</h2>
    );
}

export default MessageFeed;