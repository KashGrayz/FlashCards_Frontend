import React, { useState } from 'react';
import Nav from './Components/Nav/Nav';
import '../src/App.css'
import Collection from './Components/Main/SidebarComponents/Collection';
import CardContainer from './Components/Main/CardComponents/CardContainer';

function App() {
  //This will hold the collection that is clicke on in the <Collection/>
  const [selectedCollection,setSelectedCollection]=useState(1)
  
  return (
    <div>
      <div>
        <header>
          <Nav/>
        </header>
      </div>
      <div>
        {/* passing down setSelectedCollection as props will allow us to assign a value to selectedCollection form 
        inside of <Collection/>. After we give a value, selectedCollection can be passed down as props to <CardContainer/> */}
          <Collection setSelectedCollection={setSelectedCollection}/>
          {/* selectedCollection will be assigned a value from <Collection/>. That value needs to get passed down as props to
          <CardContainer/> to be used in axios call to fetch cards */}
          <CardContainer selectedCollection={selectedCollection}/>
      </div>
      
    </div>
  );
}

export default App;
