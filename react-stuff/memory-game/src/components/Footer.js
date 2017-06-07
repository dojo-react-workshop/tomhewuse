import React from 'react';

const Footer = (props)=>{

    const handleClick = () =>{
        props.playGame();
    };

    let footer;
    console.log(props.gameStatus);
    switch (props.gameStatus){
        case 'ready':
            footer=(
                <button id="playGameBtn" className="button small-6" onClick={handleClick}>Start Game</button>
            );
            break;
        case 'start':
            footer=(
                <p id="readyText" className="small-12">Get ready to memorize in {props.timeLeft}</p>
            );
            break;
        case 'pick':
        case 'memorize':
        case 'finish':
        default:
    }

    return(
        <div id="footer" className="row">
            {footer}
        </div>
    )
};

export default Footer;