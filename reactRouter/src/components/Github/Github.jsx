import React from 'react'
import {useEffect, useState} from 'react'
import {useLoaderData} from 'react-router-dom'
function Github(){
    const data = useLoaderData()
    // const[data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Ankit8125')
    //     .then(response => response.json())
    //     .then(data=>{
    //         setData(data)
    //     })
    // },[])
    // 2nd method for above is shown below
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            Github followers: {data.followers}
            <img src={data.avatar_url} alt="Git Picture" width={200}/>
        </div>
    )
}

export default Github

export const githubInfoLoader = async() => {
    const respose = await fetch('https://api.github.com/users/Ankit8125')
    return respose.json()
}