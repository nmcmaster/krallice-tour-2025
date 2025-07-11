export default function Row({
	venue,
	date,
	location,
	link,
	time,
    withBI = false,
    ambient = false,
}: {
	venue: string;
	date: string;
	location: string;
	time?: string;
	flyer?: string;
	link?: string;
	withBI?: boolean;
	ambient?: boolean;
}) {
	return (
		<div className="flex text-lg text-gray-50 mx-auto mb-2 justify-between p-4 bg-stone-900 rounded-lg">
		{ambient}
        	<div>
				<div>{venue} {withBI && <span className="text-amber-200 text-xs sm:text-md ml-1" >w/Blood Incantation</span>}</div>
				<div className="text-sm text-gray-500 font-semibold">{location}</div>
		
			</div>
			<div>
	
				<div className="text-right">{date} {time}</div>
				{link && <div>
					<a className="text-red-600 font-semibold text-sm text-right" href={link}>
						Tickets
					</a>
				</div>}
			</div>
		</div>
	);
}
