import kralogo from "./images/krallicelogo.png";
import Row from "./Row";

function App() {
	return (
		<>
			<main className="md:px-0 px-4 md:w-2/3 mx-auto font-serif text-gray-100 mb-12">
				<img className="block mx-auto w-1/3" src={kralogo} />
				<h1 className="text-5xl text-center mb-6 caudex-regular">
					KRALLICE MEGA TOUR 2025{" "}
				</h1>
				<Row
					venue="The Fillmore"
					date="July 14"
					location="Silver Spring, MD"
					link="https://www.ticketmaster.com/event/150062B0133E6B0E"
					withBI
				/>
				<Row
					venue="The Roxy"
					date="July 15"
					location="Lakewood, OH"
					withBI
				/>
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
                    withBI
				/>
				<Row
					venue="Spirit Hall"
					date="July 19"
					location="Pittsburgh, PA"
                    withBI
				/>
				<Row venue="Portal" date="July 20" location="Louisville, KY" />
				<Row
					venue="Delmar Hall"
					date="July 21"
					location="St. Louis, MO"
                    withBI
				/>
				<Row
					venue="The Granada"
					date="July 22"
					location="Lawrence, KS"
                    withBI
				/>
				<Row
					venue="Varsity Theater"
					date="July 23"
					location="Minneapolis, MN"
                    withBI
				/>
				<Row
					venue="Fire in the Mountains"
					date="July 25"
					location="Glacier Park, MT"
                    ambient
                    withBI
				/>
				<Row venue="Monks Bar" date="July 27" location="Missoula, MI" />
				<Row
					venue="Union Hall"
					date="July 29"
					location="Edmonton, AB"
                    withBI
				/>
				<Row
					venue="The Palace Theatre"
					date="July 30"
					location="Calgary, AB"
                    withBI
				/>
				<Row
					venue="Temple Theater"
					date="August 1"
					location="Tacoma, WA"
                    withBI
                    ambient
				/>
				<Row
					venue="Temple Theater"
					date="August 2"
					location="Tacoma, WA"
                    withBI
				/>
				<Row
					venue="Roseland Theater"
					date="August 3"
					location="Portland, OR"
                    withBI
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
                    withBI
				/>
				<Row
					venue="The Wiltern"
					date="August 7"
					location="Los Angeles, CA"
                    withBI
				/>
				<Row
					venue="Flag like Revolution"
					date="August 8"
					location="Flagstaff, AZ"
				/>
				<Row
					venue="Sister"
					date="August 9"
					location="Albuquerque, NM"
				/>
				<Row
					venue="Black Sheep"
					date="August 10"
					location="Colorado Springs, CO"
				/>
			</main>
		</>
	);
}

export default App;
