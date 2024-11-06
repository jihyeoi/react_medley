import Counter from './Counter';
import Board from './TicTacToe_Board';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Eightball from './EightBall';

/** Component for entire page.
 *
 * Props: none
 * State: none
 *
*/

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/board" element={<Board />} />
        <Route path='/eightball' element={<Eightball />} />
      </Routes>
    </Router>
  );
};

export default App;
