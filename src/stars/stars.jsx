import { StarOutline } from "heroicons-react";
import { useState } from "react";

export default function Stars() {
	const [selected, setSelected] = useState(0);
	const stars = [1, 2, 3, 4, 5];

	return (
		<section className="bg-neutral-900 h-screen w-full flex items-center justify-center">
			<div className="p-6 flex items-center justify-center w-full bg-neutral-800 max-w-md rounded-xl shadow-lg text-neutral-200 font-bold flex-col">
				<div className="space-x-2">
					{stars.map((star) => (
						<button key={star} onClick={() => setSelected(star)}>
							<StarOutline
								className={`h-10 w-10 transition-all duration-300 ${
									star === selected
										? "fill-yellow-500"
										: "fill-transparent"
								}`}
							/>
						</button>
					))}
				</div>
				<div>
                    You gave a review of {selected} {selected>1?"stars":"star"}
                    </div>
			</div>
		</section>
	);
}
