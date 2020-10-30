import React, {useEffect, useState} from "react";
import MessageFeed from "../messagefeed";
import TextBox from "../textbox";
import io from "socket.io-client";
import axios from "axios";
import './../../index.css';

function ChatModule() {
    const [ip, setIp] = useState();
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        axios.get('https://www.cloudflare.com/cdn-cgi/trace').then(function (res) {
            setIp(res.data.split("ip=")[1].split("\n")[0]);
        }).catch(function (err) {
            console.log(err);
        });
        setSocket(io());
    }, []);

    if (socket !== null) {
        return (
            <div className={'card small-cards m-5 h-100 flex-grow-1 rounded-0'}>
                <div className={'card small-cards m-5 h-100 flex-grow-1 rounded-0 border-0'}>

                    <MessageFeed socket={socket}/>
                    <TextBox socket={socket} ip={ip}/>
                </div>
            </div>
        );
    }else return(<></>);

}

export default ChatModule;