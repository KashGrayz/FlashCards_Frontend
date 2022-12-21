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
    setCollections(response.data)
    }
    //This function is recieving "el" from the onClick. "el" represents a collection object
    function handleClick(collection){
        console.log(collection)
        props.setSelectedCollection(collection.id)
    }
    return(
        <div>
            <div>
                {collections.map((el) => {
                    return (
                        <div onClick={()=>handleClick(el)}>
                            <h3>{el.title}</h3>
                        </div>
                    );
                })}
                
            </div>
            
        </div>
    );
}

