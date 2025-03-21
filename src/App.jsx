import React, { useState } from 'react';
import Container from './components/Container';
import Button from './components/Button';
import Navigation from './components/Navigation';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="appContainer">
            <Container>
                <Navigation />
                <h1>Hello World</h1>
                <p>Count: {count}</p>
                <Button text="Click on me" onClick={() => setCount(count + 1)} />
            </Container>
        </div>
    );
}

export default App;
