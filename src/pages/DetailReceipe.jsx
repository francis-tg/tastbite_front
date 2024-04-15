import React, { useState } from "react";
import {
	FiUpload,
	FiBookmark,
	FiTrendingUp,
	FiCalendar,
	FiMessageSquare,
	FiPlay,
} from "react-icons/fi";
import { IoStar } from "react-icons/io5";
import FreshReceipes from "../components/detailPage/FreshReceipes";
import { detail } from "../data";
import DetailAndIntructions from "../components/detailPage/DetailAndIntructions";
import NewLetters from "../components/detailPage/NewLetters";
import WriteComment from "../components/detailPage/WriteComment";
import {useDispatch} from "react-redux"
import { mutateLogin } from "../app/features/loginPopup";

function DetailReceipe() {
    const dispatch = useDispatch();
    function onShowLogin() {
        dispatch(mutateLogin());
      
    }
	return (
		<div className="flex items-center justify-center">
			<div className=" w-[80%] py-12">
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
					<p className=" mt-5 text-2xl font-sans ">
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
						<div className="grid grid-cols-3 items-start gap-24 justify-between">
							<DetailAndIntructions/>
							<div>
								<div className="bg-gray-100 w-full p-6 rounded-lg">
									<h1 className="text-xl font-bold mb-3">Nutrition Facts</h1>
									<div>
										{Object.keys(detail.nutrition).map((k, i) =>
											<div className="p-1">
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
												</div>
												<hr />
											</div>,
										)}
									</div>
								</div>
								<div className="mt-5">
									<FreshReceipes/>
                                </div>
                                <div className="mt-5">
                                    <NewLetters/>
                                </div>
							</div>
						</div>
                    </div>
                    <div className="mt-12 mb-24">
                        <h1 className="text-5xl font-bold mb-5">
                            Already made this?
                        </h1>
                        <button className="border-2 py-2 px-8 border-black mb-10 hover:bg-black  hover:text-white duration-200 rounded">
                            Share your feedback
                        </button>
                        <hr className=" border-4 border-orange-500"/>
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold mb-5">
                            Comments
                        </h1>
                        <hr className="mb-5" />
                        <div>

                        </div>
                    </div>
                    <WriteComment showLogin={onShowLogin}/>
				</div>
			</div>
		</div>
	);
}

export default DetailReceipe;
