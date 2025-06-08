// import React, { useEffect, useState } from 'react'

import { useLoaderData } from "react-router-dom"

function Github() {
const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/BridulMunoth')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github Followers: {data.followers}
      <img className="text-center rounded-full" src={data.avatar_url} alt="Github Picture" width={300}/>
    </div>
  )
}

export default Github
export const GithubInfoLoader= async () =>{
    let res = await fetch('https://api.github.com/users/BridulMunoth')
    return res.json()
}