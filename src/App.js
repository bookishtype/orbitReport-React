import Buttons from "./components/Buttons";
import Table from "./components/Table";
//task 2
import Banner from "./components/Banner";
//task 3
import { useState } from "react";
import satData from "./components/satData";

function App() {
//task 3
  const [sat, setSat] = useState(satData);
  //creates new array. Used to create buttons
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];
//task 3 arrow function: Filters array until it finds the data it wants
  const filterByType = (currentType) =>{
    const displaySats = satData.filter((newSatDisplay) => {
      return newSatDisplay.orbitType === currentType;
    });
    setSat(displaySats)
  }
  
  return (
    <div>
      <Banner />
      <Buttons 
      
      filterByType={filterByType}
      setSat={setSat}
      displaySats={displaySats}
      />
      <Table sat={sat} />
    </div>
  );
}

export default App;
