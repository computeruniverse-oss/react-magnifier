import React from 'react';
import './App.css';

import Magnifier from '@computeruniverse/react-magnifier';

function App() {
    return (
        <div className="App">
            <Magnifier zoomImg={'https://picsum.photos/id/190/1000/1000'} width={1000} height={1000} offsetLeft={10}>
                <img src={'https://picsum.photos/id/190/400/400'} height={400} width={400} alt="Lorem picsum" />
            </Magnifier>
        </div>
    );
}

export default App;
