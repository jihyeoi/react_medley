import { useState } from "react";
import './EightBall.css';

/**
 * Eightball
 *
 * Props: magicAnswers, an array of {msg, color} objects
 * State: answer, the {msg, color} of current answer
 */
export default function EightBall(magicAnswers) {
    const [answer, setAnswer] = useState({
        msg: "Think of a Question",
        color: "black"
    });

    function handleClick(evt) {
        setAnswer(choice(magicAnswers))
    }

    function choice() {
        let length = magicAnswers.magicAnswers.length;
        let number = Math.floor(Math.random() * length);
        return magicAnswers.magicAnswers[number];
    }

    return (
        <div className="EightBall-container">
          <div className="EightBall"
                 onClick={handleClick}
                 style={{backgroundColor: answer.color}}>
                    <b>{answer.msg}</b>
          </div>
        </div>
    )
}

