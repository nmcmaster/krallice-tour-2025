export default function Row({
	venue,
	date,
	location,
	link,
	time,
}: {
	venue: string;
	date: string;
	location: string;
	time?: string;
	flyer?: string;
	link?: string;
}) {

	return (
		<div className="flex text-lg text-gray-50 w-3/4 mx-auto justify-between p-4 bg-stone-900 rounded-lg">
			<div>
				<div>{venue}</div>
				<div>{location}</div>
        <div>{link}</div>
      
			</div>
	<div>	<div>{date}</div>  <div>{time}</div></div>	
		</div>
	);
}
