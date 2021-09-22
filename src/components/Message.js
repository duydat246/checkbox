import React, { useState } from 'react';


function Message(props) {
    const [message, setMessage] = useState("hello moi ngui");
    const handleClickBtn = () => {
        setMessage("thank for subscribe")
    }
    return (
        <div>
            <h1>{message}</h1>
            <button onClick={() => handleClickBtn()}>subscribe</button>
        </div>
    );
}

export default Message;