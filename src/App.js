import "./App.css";
import Card from "./components/Card";
import Status from "./components/Status";
import User from "./components/User";
import data from "./data.json";

function App() {
  return (
    <>
      <section className="statusAndUserContent">
        <Status />
        <User />
      </section>
      <section>
        <Card data={data} />
      </section>
    </>
  );
}

export default App;
