import ParkCard from "./components/parkCard";
import Grid from "@material-ui/core/Grid";
import TestData from "./test.json";

function App() {
  const parks = TestData.data;

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
