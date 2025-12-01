// create your App component here
import react, { useEffect } from 'react';
import { useState } from 'react';

function App() {
    // load random dog from an API and display it
    const [dog, setDog] = useState(null);
    const [loading, setLoading] = useState(true);
    const handleSetDog = async () => {
        setLoading(true);
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => {
                setDog(data.message);
                setLoading(false);
            });
    };
    useEffect(() => {
        handleSetDog();
    }, []);
  return (
    <div className='app'>
        {loading ? <p>Loading...</p> : <img src={dog} alt="A Random Dog" />}
    </div>
  );
}

export default App;