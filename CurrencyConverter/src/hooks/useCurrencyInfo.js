import { useEffect, useState } from "react";


function useCurrencyInfo(fromCuntry, toCuntry) {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://api.frankfurter.dev/v1/latest?base=${fromCuntry}&symbols=${toCuntry}`)
        .then((res)=>res.json())
        .then((res)=> setData(res.base))
        console.log(data)
    },[fromCuntry, toCuntry])
    console.log(data)
    return data
}

export default useCurrencyInfo