import {useEffect, useState} from 'react';
import fetch from 'isomorphic-unfetch';

function City() {
    const [city, setCity] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const cityName = window.location.pathname.split('/').pop();
            const baseUrl =
                process.env.NODE_ENV === 'production' ? `https://${window.location.host}` : 'http://localhost:3000';
            const res = await fetch(`${baseUrl}/api/city/${cityName}`);
            const data = await res.json();

            setCity(data);
        }

        fetchData();
    }, []);

    return city ? city.name : 'Loading...';
}

export default City;
