import kralogo from "./images/krallicelogo.png";
import Row from "./Row";

function App() {
  return (
    <main className="w-2/3 mx-auto font-serif text-gray-100">
      <img className="block mx-auto w-1/3" src={kralogo} />
      <h1 className="text-5xl text-center my-4 caudex-regular">
        KRALLICE MEGA TOUR 2025{" "}
      </h1>
   <Row venue="venue" date="august 21" location="nyc" />
    </main>
  );
}

export default App;
