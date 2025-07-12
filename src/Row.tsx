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
		<div className="text-gray-50 mx-auto mb-2 justify-between p-4 bg-stone-900/70 rounded-lg">
			<div className="flex justify-between mb-0.5">
				{" "}
				<div className="text-lg">{venue} </div>
				<div className="text-right">
					{date} {time}
				</div>
			</div>
			{withBI && (
				<div className="text-amber-200 text-xs leading-2 mb-1.5 sm:text-md">
					w/Blood Incantation
				</div>
			)}
			{ambient && (
				<div className="text-green-600 font-bold text-xs sm:text-md mt-1.5">
					** Ambient Set **
				</div>
			)}
			<div className="flex justify-between">
				<div className="text-sm text-gray-400 font-semibold">
					{location}
				</div>
				<div>
					{link && (
						<a
							className="text-red-600 block font-bold text-right"
							href={link}
						>
							Tickets
						</a>
					)}
				</div>
			</div>
		</div>
	);
}
