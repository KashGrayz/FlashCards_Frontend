import axios from "axios"
import React, {useState, useEffect} from "react"

export default function CardContainer(props){
    const [cards, setCards] = useState({});
    //calls the fetchCards function when page first loads. Will RECALL that function when props.selectedCollection changes (dependency [])
    useEffect(()=>{
        fetchCards();
    },[props])
    //This function will need a collectionID to be used in an axios call to fetch appropriate cards
    async function fetchCards(){
        console.log(props.selectedCollection)
        let response = await axios.get(`http://127.0.0.1:8000/api/collections/${props.selectedCollection}/cards/`);
        console.log(response.data);
        setCards(response.data);

        const = 
    }


    //returning first card of the collection.
    return(
    <div>
        <div>
            <h4>{}</h4>
        </div>
    </div>
    )
}
