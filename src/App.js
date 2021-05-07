import { useEffect, useState } from "react";
import ParkCard from "./components/parkCard";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

function App() {
  const [parks, getParks] = useState([]);

  useEffect(() => {
    getNearbyParks();
  }, []);

  const getNearbyParks = () => {
    axios
      .get(
        "http://localhost:5000/api/v1/parks/nearby?long=-122.392605&lat=37.604284&dist=1000"
      )
      .then((response) => {
        const allParks = response.data.data;
        getParks(allParks);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <Grid container spacing={3} direction="column">
          <Grid item xs={6}>
            {parks.map((park) => (
              <ParkCard key={park._id} park={park} />
            ))}
          </Grid>
        </Grid>
      </header>
    </div>
  );
}

export default App;
