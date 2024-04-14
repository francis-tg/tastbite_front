import React from "react";
import { detail } from "../../data";
import { FiEdit, FiPrinter } from "react-icons/fi";
import ListItemWithCheckbox from "../../components/detailPage/ListItemWithCheckbox";
function DetailAndIntructions() {
	return (
		<div className="w-full col-span-3 xl:col-span-2">
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
					{Object.entries(detail.recipe.ingredients.crust).map(([key, value]) =>
						<ListItemWithCheckbox
							className="mb-3"
							key={key}
							keyName={key}
							value={value}
						/>,
					)}
				</ul>

				<h3 className="text-xl font-bold mb-3 mt-5"> For Cheesecake</h3>
				<ul>
					{Object.entries(
						detail.recipe.ingredients.cheesecake,
					).map(([key, value]) =>
						<ListItemWithCheckbox
							className="mb-3"
							key={key}
							keyName={key}
							value={value}
						/>,
					)}
				</ul>

				<h2 className="text-3xl font-bold mb-8 mt-5">Instructions</h2>
				<ol className="list-none">
					{detail.recipe.instructions.map((step, index) =>
						<div className="flex items-start font-sans font-normal gap-5 mb-5">
							<div className="bg-orange-500 w-7 px-2.5 py-1  text-white  h-7 flex-none text-sm rounded-full">
								{index + 1}
							</div>
							<li key={index} className="text-xl">
								{step}
							</li>
						</div>,
					)}
				</ol>
			</div>
		</div>
	);
}

export default DetailAndIntructions;
