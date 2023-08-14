// Four clickable buttons
// Three of them will use the props you passed from the App() function
// One will display all of the satellites
import satData from "./satData";

const Buttons = (props) => {
  const filterByType = props.filterByType;
  const setSat = props.setSat;
  const displaySats = props.displaySats;

  return (
    <div>
      {displaySats.map((sat, id) => {
        return (
          <button onClick={() => filterByType(sat)} key={id}>
            {sat} Orbit
          </button>
        )
      })}

      <button onClick={() => setSat(satData)}>
        All Orbits
      </button>
    </div>
  );
};

export default Buttons;
