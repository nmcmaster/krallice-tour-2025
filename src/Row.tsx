import './shimmer.css';

export default function Row({
	venue,
	date,
	location,
	link,
	time,
	withBI = false,
	ambient = false,
	openers = '',
}: {
	venue: string;
	date: string;
	location: string;
	time?: string;
	flyer?: string;
	link?: string;
	withBI?: boolean;
	ambient?: boolean;
	openers?: string;
}) {
	    const getShowStatus = () => {
        const currentYear = new Date().getFullYear();
        const showDate = new Date(`${date}, ${currentYear}`);
        const today = new Date();

        // Reset time portion to compare dates only
        today.setHours(0, 0, 0, 0);
        showDate.setHours(0, 0, 0, 0);

        if (showDate < today) return "past";
        if (showDate.getTime() === today.getTime()) return "today";
        return "upcoming";
    }


	const showStatus = getShowStatus();
	const pastShowClass = showStatus === "past" ? "line-through opacity-70" : "";
	const isTodayShow  = showStatus === "today";


	return (
		<div className="text-gray-50 mx-auto mb-2 justify-between p-4 bg-stone-900/70 rounded-lg">
			<div className="flex justify-between mb-0.5">
			   <div className={`text-lg ${pastShowClass} ${isTodayShow ? "shimmer-effect" : ""}`}>
                    {venue}
                </div>
				<div className={`text-right ${pastShowClass} ${isTodayShow ? "shimmer-effect" : ""}`}>
					{date} {time}
				</div>
			</div>
			{withBI && (
				<div className="text-amber-200 text-xs leading-2 mb-1.5 sm:text-md">
					w/Blood Incantation
				</div>
			)}
			{openers && (
				<div className="text-amber-200 text-xs leading-2 mb-1.5 sm:text-md">
					w/{openers}
				</div>
			)}
			{ambient && (
				<div className="text-green-600 font-bold text-xs sm:text-md mt-1.5">
					** Ambient Set **
				</div>
			)}
			<div className="flex justify-between">
				<div className="text-sm text-gray-500 font-semibold">
					{location}
				</div>
				<div>
					{link && (
						<a
							className={`text-red-600 block font-bold text-right ${pastShowClass}`}
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
