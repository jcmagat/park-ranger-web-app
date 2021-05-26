import { useEffect, useState } from "react";
import ParkCard from "./components/parkCard";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  gridContainer: {
    padding: "40px",
  },
});

function App() {
  const classes = useStyles();

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
    <Grid container spacing={4} className={classes.gridContainer}>
      {parks.map((park) => (
        <Grid item xs={12} sm={6} md={4}>
          <ParkCard key={park._id} park={park} />
        </Grid>
      ))}
    </Grid>
  );
}

export default App;
