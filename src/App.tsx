import kralogo from "./images/krallicelogo.png";
import Row from "./Row";

function App() {
    return (
        <main className="w-2/3 mx-auto font-serif text-gray-100">
            <img className="block mx-auto w-1/3" src={kralogo} />
            <h1 className="text-5xl text-center mb-6 caudex-regular">
                KRALLICE MEGA TOUR 2025{" "}
            </h1>
            <Row
                venue="The Fillmore"
                date="July 14"
                location="Silver Spring, MD"
            />
            <Row venue="The Roxy" date="July 15" location="Lakewood, OH " />
            <Row venue="Reggies" date="July 16" location="Chicago, IL" />
            <Row
                venue="Club Garibaldi"
                date="July 17"
                location="Milwaukee, WI"
            />
            <Row
                venue="Old National Center"
                date="July 18"
                location="Indianapolis"
            />
            <Row venue="Spirit Hall" date="July 19" location="" />
            <Row venue="" date="July 20" location="" />
            <Row venue="The " date="July 21" location="" />
            <Row venue=" Steel" date="July 22" location="" />
            <Row venue="The " date="July 23" location="" />
            <Row venue="The " date="July 24" location="" />
            <Row
                venue="Fire in the Mountains"
                date="July 25"
                location="Glacier Park, MT"
            />
            <Row venue="Monks Bar" date="July 27" location="Missoula, MI" />
            <Row venue="Union Hall" date="July 29" location="Edmonton, AB" />
            <Row
                venue="The Palace Theatre"
                date="July 30"
                location="Calgary, AB"
            />
            <Row venue="Temple Theater" date="August 1" location="Tacoma, WA" />
            <Row venue="Temple Theater" date="August 2" location="Tacoma, WA" />
            <Row
                venue="Roseland Theater"
                date="August 3"
                location="Portland, OR"
            />
            <Row
                venue="Savage Henry Comedy Club"
                date="August 4"
                location="Eureka, CA"
            />
            <Row
                venue="Starlet above Harlow's"
                date="August 5"
                location="Sacramento, CA"
            />
            <Row
                venue="The Regency Ballroom"
                date="August 6"
                location="San Francisco, CA"
            />
            <Row venue="The Wiltern" date="August 7" location="" />
            <Row
                venue="Flag like Revolution"
                date="August 8"
                location="Flagstaff, AZ"
            />
            <Row venue="Sister" date="August 9" location="Albuquerque, NM" />
            <Row
                venue="Black Sheep"
                date="August 10"
                location="Colorado Springs, CO"
            />
        </main>
    );
}

export default App;
