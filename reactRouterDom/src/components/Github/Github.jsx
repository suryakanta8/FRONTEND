import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {

    const data = useLoaderData()


    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/suryakantaacharya')
    //     .then(response => response.json)
    //     .then(data => {
    //         setData(data)
    //     })
    // }, []) 

    // data.followers = 100

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'> Github followers: {data.followers}
    <img src="https://yt3.googleusercontent.com/R6P5skGdZJeM1bebvt3ILeU8k-9tiqE5T198RmBH8SoGXH2gk_Lk-45uZoq6X6pW4a4c9Sqn=s900-c-k-c0x00ffffff-no-rj" alt="GitPhoto" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/suryakantaacharya')
    return response.json()
}
