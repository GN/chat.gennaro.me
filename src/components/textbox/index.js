import React, {useState} from 'react';


function TextBox(props){
    const[name, setName] = useState(props.name);

    return(
        <div className="align-items-center p-5">
            <div className="col">
                <div className={'conainter'}>
                    <div className={"jumbotron"}>
                        <form onSubmit={e => e.preventDefault()}>
                            <textarea id={'message'} className={'form-control rounded-0'} rows={5} onChange={e => setName(e.target.value)} defaultValue={props.name}/>
                            <button className={'btn btn-primary btn-lg btn-block rounded-0'} onClick={() => props.setName(name)}>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );


}

export default TextBox;