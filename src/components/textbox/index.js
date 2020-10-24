import React, {useState} from 'react';


function TextBox(props){
    const[message, setMessage] = useState("");

    return(

        <form onSubmit={e => e.preventDefault()} className={''}>
            <div className={'form-group mb-0'}>
                <textarea id={'message'} className={'form-control rounded-0'} rows={5} onChange={e => setMessage(e.target.value)} defaultValue={message}/>
                <button className={'btn btn-primary btn-lg btn-block rounded-0'} onClick={() => props.addMessage(message)}>Send Message</button>
            </div>
        </form>
    );


}

export default TextBox;