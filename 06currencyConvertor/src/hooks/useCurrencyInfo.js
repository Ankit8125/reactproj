import {useEffect, useState} from "react"
// our custom hook will take 'currency' as input
function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json()) // then-> return a callback (above api in string format, so converting it into json)
        .then((res)=>setData(res[currency]))
    },[currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;
    