import React from "react";
import { FiLock,FiUser } from "react-icons/fi";
import { IoMailOutline, IoLogoFacebook } from "react-icons/io5";
import { Link } from "react-router-dom";
function RegisterForm({ onFormChange }) {
	return (
		<div>
			<h1 className='text-3xl'>Register</h1>
			<form
				method='post'
                className='p-8'>
                <div className='relative mb-8'>
					<FiUser className='absolute text-gray-500 left-0 bottom-3 text-xl' />
					<input
						type='text'
						placeholder='FullName'
						className='border-b-2 indent-7 w-full p-2 outline-none'
					/>
				</div>
				<div className='relative mb-8'>
					<IoMailOutline className='absolute text-gray-500 left-0 bottom-3 text-xl' />
					<input
						type='email'
						placeholder='Email'
						className='border-b-2 indent-7 w-full p-2 outline-none'
					/>
				</div>
				<div className='relative mb-10'>
					<FiLock className='absolute text-gray-500 left-0 bottom-3 text-xl' />
					<input
						type='text'
						placeholder='Password'
						className='border-b-2 indent-7 w-full p-2 outline-none'
					/>
					{/* <div>
						<div className='absolute right-0 -bottom-6 text-orange-500'>
							<Link to={""}>forget password</Link>
						</div>
					</div> */}
				</div>

				<button className='bg-orange-500 w-full text-white rounded p-3'>
					Register
				</button>
			</form>

			<div className='flex items-center gap-6 justify-between flex-col'>
				<span className='text-center'>Or Sign up with</span>
				<div className='flex items-center gap-5'>
					<button className='flex items-center font-serif gap-2 p-3 rounded bg-gray-200'>
						<IoLogoFacebook className='text-xl text-blue-500' /> With Facebook
					</button>
					<button className='flex items-center font-serif gap-2 p-3 rounded bg-gray-200'>
						<img
							src={require("../img/google.png")}
							className='w-6'
							alt=''
						/>
						With Google
					</button>
				</div>
			</div>

			<div className='text-center mt-12'>
				<p>
					Have already an account?{" "}
					<Link
						to={"#"}
						onClick={() => {
							onFormChange("signin");
						}}
						className='text-orange-500'>
						Sign In
					</Link>
				</p>
			</div>
		</div>
	);
}

export default RegisterForm;
