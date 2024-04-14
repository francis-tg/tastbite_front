import React from "react";
import { freshReceipe } from "../../data";
import { IoStar } from "react-icons/io5";
function FreshReceipes() {
	return (
		<div>
			<h1 className="text-3xl font-bold">Fresh Recipes</h1>
			<div className="flex flex-col gap-3 mt-5">
				{freshReceipe.map((r, k) =>
					<div key={k} className="flex gap-3 items-start">
						<div className=" flex-none w-32 rounded-lg overflow-hidden">
							<img src={r.image} className="rounded" alt="" />
						</div>
						<div>
							{r.title}
							<div className="flex">
								{Array.from({ length: r.start }).map((_, k) =>
									<IoStar key={k} className="text-orange-500" />,
								)}
							</div>
						</div>
					</div>,
				)}
			</div>
		</div>
	);
}

export default FreshReceipes;
