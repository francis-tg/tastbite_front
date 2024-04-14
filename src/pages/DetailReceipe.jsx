import React from "react";
import {
	FiUpload,
	FiBookmark,
	FiTrendingUp,
	FiCalendar,
	FiMessageSquare,
	FiPlay,
	FiEdit,
	FiPrinter,
} from "react-icons/fi";
import { IoStar } from "react-icons/io5";
import ListItemWithCheckbox from "../components/ListItemWithCheckbox";
const detail = {
	recipe: {
		name: "Galaxy Cheesecake",
		ingredients: {
			crust: {
				"graham crackers": "400g",
				"unsalted butter, melted": "150g",
			},
			cheesecake: {
				marshmallows: "300g",
				"unsalted butter, melted": "175g",
				"Philadelphia cream cheese, softened": "500g",
				"thickened/whipping cream, warm": "250ml",
				"powdered gelatin + water": "3 tbsp + 3 tbsp",
				"purple food gel": "5 drops",
				"blue food gel": "3 drops",
			},
		},
		instructions: [
			"To prepare crust add graham crackers to a food processor and process until you reach fine crumbs. Add melted butter and pulse 3-4 times to coat crumbs with butter.",
			"Pour mixture into a 20cm (8”) tart tin. Use the back of a spoon to firmly press the mixture out across the bottom and sides of the tart tin. Chill for 30 min.",
			"Begin by adding the marshmallows and melted butter into a microwave safe bowl. Microwave for 30 seconds and mix to combine. Set aside.",
			"Next, add the gelatine and water to a small mixing bowl and mix to combine. Microwave for 30 seconds.",
			"Add the cream cheese to the marshmallow mixture and use a hand mixer or stand mixer fitted with a paddle attachment to mix until smooth.",
			"Add the warm cream and melted gelatin mixture and mix until well combined.",
			"Add 1/3 of the mixture to a mixing bowl, add purple food gel and mix until well combined. Colour 1/3 of the mixture blue. Split the remaining mixture into two mixing bowls, colour one pink and leave the other white.",
			"Pour half the purple cheesecake mixture into the chill tart crust. Add half the blue and then add the remaining purple and blue in the tart tin. Use a spoon to drizzle some pink cheesecake on top. Use a skewer or the end of a spoon to swirl the pink. Add some small dots of the plain cheesecake mixture to create stars and then sprinkle some more starts on top before chilling for 2 hours.",
			"Slice with a knife to serve.",
		],
	},

	nutrition: {
		calories: "219.9",
		total_fat: "10.7 g",
		saturated_fat: "2.2 g",
		cholesterol: "37.4 mg",
		sodium: "120.3 mg",
		potassium: "32.8 mg",
		total_carbohydrate: "22.3 g",
		sugars: "8.4 g",
		protein: "7.9 g",
	},
};

function DetailReceipe() {
	return (
		<div className="flex items-center justify-center">
			<div className=" w-[70%] py-12">
				<div>
					<div className="flex items-center gap-10 justify-between">
						<div className="flex items-center gap-3 ">
							<FiTrendingUp className="text-orange-500" />
							85% would make this again
						</div>
						<div className="flex items-center gap-5 text-3xl">
							<FiUpload className="hover:text-orange-500 hover:cursor-pointer" />
							<FiBookmark className="hover:text-orange-500 hover:cursor-pointer" />
						</div>
					</div>
					<div className="mt-5">
						<h1 className="text-6xl w-full font-bold">
							Strawberry Cream Cheesecake
						</h1>
					</div>
					<div className="flex items-center justify-start gap-8 mt-8 mb-8">
						{/* Profile */}
						<div className="flex items-center gap-1">
							<div className="w-10 h-10 rounded-full ">
								<img
									src={require("../img/menu10.png")}
									className="w-10 h-10 rounded-full"
									alt=""
								/>
							</div>
							<p className="text-sm">Francis ALAPHIA</p>
						</div>

						<div className="flex items-center gap-1">
							<FiCalendar />
							Yesterday
						</div>
						<div className="flex items-center gap-1">
							<FiMessageSquare />
							25
						</div>
						<div className="flex items-center text-orange-500 gap-1">
							<IoStar />
							<IoStar />
							<IoStar />
							<IoStar />
							<IoStar />
						</div>
					</div>
					<hr />
					<p className="font-serif mt-5">
						One thing I learned living in the Canarsie section of Brooklyn, NY
						was how to cook a good Italian meal. Here is a recipe I created
						after having this dish in a restaurant. Enjoy!
					</p>
					<div>
						<div className="relative py-5 mt-3">
							<img
								className="w-full rounded-xl h-1/2"
								src={require("../img/menu1.jpg")}
								alt=""
							/>
							<div className="absolute w-full h-full top-0 flex items-center text-white justify-center cursor-pointer hover:text-orange-500">
								<FiPlay className=" text-9xl " />
							</div>
						</div>
						<div className="grid grid-cols-2 items-start justify-between">
							<div className="w-full">
								<div className="flex text-sm gap-5 items-center">
									<div className="uppercase">
										<p className="text-gray-400">Prep time</p>
										<p>15 Min</p>
									</div>
									<hr className="border border-gray h-[50px]" />
									<div className="uppercase">
										<p className="text-gray-400">Prep time</p>
										<p>15 Min</p>
									</div>
									<hr className="border border-gray h-[50px]" />
									<div className="uppercase">
										<p className="text-gray-400">Servings</p>
										<p className="flex items-end gap-2">
											15 people{" "}
											<FiEdit className="hover:text-orange-500 cursor-pointer" />
										</p>
									</div>
									<hr className="border border-gray h-[50px]" />
									<div className="text-2xl">
										<FiPrinter className="hover:text-orange-500 cursor-pointer" />
									</div>
								</div>
								<div>
									<h1 className="text-3xl font-bold mb-3 mt-5">Ingredients</h1>
									<h3 className="text-xl font-bold mb-3 mt-5">For Crust</h3>
									<ul>
										{Object.entries(
											detail.recipe.ingredients.crust,
										).map(([key, value]) =>
											<ListItemWithCheckbox className="mb-3" key={key} keyName={key} value={value}/>,
										)}
									</ul>

									<h3 className="text-xl font-bold mb-3 mt-5"> For Cheesecake</h3>
									<ul>
										{Object.entries(
											detail.recipe.ingredients.cheesecake,
										).map(([key, value]) =>
                                           <ListItemWithCheckbox className="mb-3" key={key} keyName={key} value={value}/>,
										)}
									</ul>

									<h2 className="text-3xl font-bold mb-3 mt-5">Instructions</h2>
									<ol className="list-none">
                                        {detail.recipe.instructions.map((step, index) =>
                                            <div className="flex items-start gap-2 mb-3">
                                                <div className="bg-orange-500 w-7 px-2.5 py-1 text-white  h-7 flex-none text-sm rounded-full">{index+1}</div>
											<li key={index}>
												{step}
											</li>
                                            </div>,
										)}
									</ol>
								</div>
							</div>
							<div>
								<div className="bg-gray-100 w-[60%] p-6 rounded">
									<h1 className="text-xl font-bold mb-3">Nutrition Facts</h1>
									<div>
										{Object.keys(detail.nutrition).map((k, i) =>
											<div
												key={i}
												className="flex justify-between items-center mb-1"
											>
												<p>
													{k}
												</p>
												<span>
													{detail.nutrition[k]}
												</span>
											</div>,
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DetailReceipe;
