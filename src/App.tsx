import kralogo from "./images/krallicelogo.png";
import Row from "./Row";
import footer from "./images/galagaFooter.png";
import portal from "./images/portal-july-20.jpg";
import garibaldi from "./images/garibaldi-july-17.jpg";
import tacomaHeavy from "./images/tacoma-august-2.png";
import tacomaAmbient from "./images/tacoma-august-1.jpg";
import tourPoster from "./images/tour-poster-2025.png";

function App() {
	const flyer = "rounded-xl shadow-2xl";

	return (
		<>
			<main className="md:px-0 px-3 md:w-2/3 mx-auto font-serif text-gray-100 mb-6">
				<img className="block mx-auto mt-4 w-1/3" src={kralogo} />
				<h1 className="text-2xl md:text-5xl text-center md:mb-6 mb-2 caudex-regular">
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
					link="https://dice.fm/event/wwby9x-blood-incantation-15th-jul-mahalls-lakewood-the-roxy-at-mahalls-lakewood-tickets"
					withBI
				/>
				<Row
					venue="Reggies"
					date="July 16"
					location="Chicago, IL"
					link="https://www.livenation.com/event/1718vxG6GMCvZWI/krallice-the-flying-luttenbachers"
				/>
				<Row
					venue="Club Garibaldi"
					date="July 17"
					location="Milwaukee, WI"
					link="https://www.etix.com/ticket/p/98993780/krallice-niveous-nicholas-elert-milwaukee-club-garibaldi-milwaukee"
				/>
				<Row
					venue="Old National Centre"
					date="July 18"
					location="Indianapolis, IN"
					link="https://www.ticketmaster.com/event/050062B0E1846327"
					withBI
				/>
				<Row
					venue="Spirit Hall"
					date="July 19"
					location="Pittsburgh, PA"
					link="https://www.ticketmaster.com/event/160062B39F37156B"
					withBI
				/>
				<Row
					venue="Portal"
					date="July 20"
					location="Louisville, KY"
					link="https://dice.fm/event/k6eog9-krallice-the-sharp-stars-sinistrum-atrophic-20th-jul-portal-louisville-tickets"
				/>
				<Row
					venue="Delmar Hall"
					date="July 21"
					location="St. Louis, MO"
					link="https://www.ticketmaster.com/event/060062B0A2B059CA"
					withBI
				/>
				<Row
					venue="The Granada"
					date="July 22"
					location="Lawrence, KS"
					withBI
					link="https://www.etix.com/ticket/p/86289737/blood-incantation-lawrence-the-granada"
				/>
				<Row
					venue="Varsity Theater"
					date="July 23"
					location="Minneapolis, MN"
					withBI
					link="https://www.ticketmaster.com/event/060062B2037C5BE8"
				/>
				<Row
					venue="Fire in the Mountains"
					date="July 25"
					location="Glacier Park, MT"
					ambient
					withBI
					link="https://events.humanitix.com/fire-in-the-mountains"
				/>
				<Row
					venue="Monks Bar"
					date="July 27"
					location="Missoula, MT"
					link="https://www.eventbrite.com/e/krallice-live-at-monks-tickets-1497262204559"
					openers="Jules Jensen"
				/>
				<Row
					venue="Union Hall"
					date="July 29"
					location="Edmonton, AB"
					withBI
					link="https://www.ticketweb.ca/event/blood-incantation-union-hall-tickets/14487343"
				/>
				<Row
					venue="The Palace Theatre"
					date="July 30"
					location="Calgary, AB"
					withBI
					link="https://www.ticketweb.ca/event/blood-incantation-absolute-elsetour-north-the-palace-theatre-tickets/14486893"
				/>
				<Row
					venue="Temple Theatre"
					date="August 1"
					location="Tacoma, WA"
					withBI
					ambient
					link="https://www.etix.com/ticket/p/63074459/blood-incantation-timewave-zero-set-tacoma-temple-theatre"
				/>
				<Row
					venue="Temple Theatre"
					date="August 2"
					location="Tacoma, WA"
					withBI
					link="https://www.etix.com/ticket/p/89389989/blood-incantation-tacoma-temple-theatre"
				/>
				<Row
					venue="Roseland Theater"
					date="August 3"
					location="Portland, OR"
					withBI
					link="https://www.etix.com/ticket/p/98386899/bloodincantation-absolute-elsetour-north-america-2025-portland-roseland-theater"
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
					link="https://www.etix.com/ticket/p/67858900/krallicewith-sunrot-and-couch-slut-sacramento-the-starlet-room"
					openers="Couch Slut, Sunrot"
				/>
				<Row
					venue="The Regency Ballroom"
					date="August 6"
					location="San Francisco, CA"
					withBI
					link="https://www.axs.com/events/978895/blood-incantation-tickets"
					openers="Dispirit"
				/>
				<Row
					venue="The Wiltern"
					date="August 7"
					location="Los Angeles, CA"
					withBI
					link="https://www.ticketmaster.com/event/090062B2C9A3440F"
					openers="Steve Roach, Cynic"
				/>
				<Row
					venue="Flag Bike Revolution"
					date="August 8"
					location="Flagstaff, AZ"
				/>
				<Row
					venue="Sister"
					date="August 9"
					location="Albuquerque, NM"
					link="https://www.eventbrite.com/e/krallice-tickets-1470988589469"
				/>
				<Row
					venue="Black Sheep"
					date="August 10"
					location="Colorado Springs, CO"
					link="https://www.ticketweb.com/event/krallice-seance-black-sheep-tickets/13850174"
					openers="Seance"
				/>
				<div className="space-y-6 mt-8">
					{" "}
					<img
						src={garibaldi}
						className={flyer}
						alt="Club Garibaldi"
					/>
					<img src={portal} className={flyer} alt="Portal" />
					<img
						src={tacomaHeavy}
						className={flyer}
						alt="Tacoma heavy set"
					/>
					<img
						src={tacomaAmbient}
						className={flyer}
						alt="Tacoma ambient set"
					/>
					<img
						src={tourPoster}
						className="block mx-auto rounded-lg shadow-2xl"
						alt="Krallice July 2025 tour flyer"
					/>
				</div>

				<img
					src={footer}
					className="mx-auto w-56 rounded-4xl shadow-2xl mt-5"
				/>
			</main>
		</>
	);
}

export default App;
