import { useEffect, useState } from "react";

export default function useCurrencyInfo(fromCountry, toCountry) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://api.frankfurter.app/latest?base=${fromCountry}&symbols=${toCountry}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Failed to fetch');
                }
                return res.json();
            })
            .then((data) => setData(data))
            .catch((err) => {
                console.error("Fetch error:", err.message);
                setData({ rates: { [toCountry]: 0 } }); // Safe fallback
            });
    }, [fromCountry, toCountry]);

    return data;
}

