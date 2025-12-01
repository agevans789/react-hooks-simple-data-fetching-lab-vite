// create your App component here
import react, { useEffect } from 'react';
import { useState } from 'react';

function App() {
    // load random dog from an API and display it
    const [dog, setDog] = useState(null);
    const handleSetDog = async () => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => setDog(data.message));
    };
    useEffect(() => {
        handleSetDog();
    }, []);
  return (
    <div>
    </div>
  );
}

export default App;