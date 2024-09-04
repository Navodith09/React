import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()
    console.log("Data in component:", data); // Should log the data received from the loader
    

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/Navodith09')
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data);
    //         setData(data)
            
    //     })
    // }, [])

    return (
        <div className='flex bg-orange-400 text-white text-3xl items-center text-center p-4'>
            {data ? (
                <>
                    <img className='shadow-lg rounded-xl' src={data.avatar_url} alt="Git Avatar" />
                    <div className='p-6'>
                        <h1 className='text-black text-4xl'>Github Name: {data.login}</h1>
                        <p>Followers: {data.followers}</p>
                        <p>Type: {data.type}</p>
                        <p>Location: {data.location}</p>
                        <p>Bio: {data.bio}</p>
                        <p>Public Repos: {data.public_repos}</p>
                    </div>
                </>
            ) : (
                <p>Loading data...</p>
            )}
        </div>
    );
}

export default Github

export const githubInfoLoader = async () => {
    console.log("Loader is executing"); // Should log to the console
    try {
        const response = await fetch('https://api.github.com/users/Navodith09');
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const data = await response.json();
        console.log("Data received:", data); // Should log the received data
        return data;
    } catch (error) {
        console.error('Fetching data failed:', error);
        return null; // Return null if an error occurs
    }
};