import { useState, useEffect} from 'react';

export function FetchLogement(url) {
    const [logementData, setLogementData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        async function fetchLogementData() {
                try {
                    const response = await fetch(url);
                    const logementData = await response.json();
                    setLogementData(logementData);
                } catch (error) {
                    setError(true);
                    console.log(error);
                } finally {
                    setIsLoading(false);
                }
        }
        fetchLogementData();
    }, [url]);

    return { isLoading, logementData, error }

}

export default FetchLogement;