import { useState } from 'react';
import './Counter.css';
import { Link } from 'react-router-dom';

/** Component for Counter page.
 *
 * Props: none
 * State: none
 *
*/

function Counter() {
    const [count, setCount] = useState(0);
    console.debug("count: ", count);

    function incrCount() {
        setCount(count => count + 1);
    }

    function resetCount() {
        setCount(0);
    }

    return (
        <div className="Counter">
        <main>
            <h1
                className="display-4">
                A Simple Counter
            </h1>
            <p>
            <button
                className="btn btn-info"
                onClick={incrCount}>
                Clicked: {count}
            </button>
            </p>
            <p>
            {count >= 10
            ? <div>
                <button
                className="btn btn-warning"
                onClick={resetCount}>
                Start Over
            </button>
            <Link to="/board" className="btn btn-success">
                Go to Board
            </Link>
            </div>
            : "keep clicking to go down the rabbit hole..."}
            </p>
        </main>
        </div>
    );
};

export default Counter;
