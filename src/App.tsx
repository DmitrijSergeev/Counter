import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Components/Counter";

function App() {
    let [num, setNum] = useState(0)
    const increment = () => {
        if (num === 5) {
            return
        }
        setNum(num + 1);
    }
    const reset = () => setNum(0)

    return (
        <div className="App">
            <Counter
                title={'Counter'}
                num={num}
                reset={reset}
                increment={increment}
            />
        </div>
    );
}

export default App;
