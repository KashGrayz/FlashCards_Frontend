import React, { useState, useEffect } from 'react';
import axios from 'axios'
export default function Collection(props){

    const [collections, setCollections] = useState([]);
    useEffect(()=>{
        fetchCollection();
    },[])
    async function fetchCollection(){
    let response = await axios.get('http://127.0.0.1:8000/api/collections/')
    console.log(response)
    debugger
    setCollections(response.data)
    }

    return(
        <div>
            <div>
                {collections.map((el) => {
                    return (
                        <div>
                            <h3>{el.title}</h3>
                            <h3>{el.description}</h3>
                        </div>
                    );
                })}
                
            </div>
            
        </div>
    );
}

