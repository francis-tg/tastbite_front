import React from 'react'
import { Link } from 'react-router-dom'
import {FiFacebook,FiTwitter,FiInstagram,FiYoutube} from "react-icons/fi"
function Footer() {
    return (
        <footer className='bg-gray-200 px-12 py-8'>
            <div className='flex items-center justify-between gap-32 py-8'>
                <div>
                    <div className="w-1/2">
                        <img src={require("../img/logo.png")} className='w-24 mb-3' alt="" />
                        <p className='text-gray-500'>
                            "On other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charm of pleasure of the moment"
                        </p>
                    </div>
                </div>
                <div className='flex flex-col items-start gap-3'>
                    <h1 className='font-bold'>
                        Tastebite
                    </h1>
                    <Link to={""} className='text-gray-500'>
                        About
                    </Link>
                    <Link to={""} className='text-gray-500'>
                        Careers
                    </Link>
                    <Link to={""} className='text-gray-500'>
                        Contact Us
                    </Link>
                    <Link to={""} className='text-gray-500'>
                        Feedback
                    </Link>
                </div>
                <div className='flex flex-col items-start gap-4'>
                    <h1 className='font-bold'>
                        Legal
                    </h1>
                    <Link to={""} className='text-gray-500'>
                        Terms
                    </Link>
                    <Link to={""} className='text-gray-500'>
                        Conditions
                    </Link>
                    <Link to={""} className='text-gray-500'>
                        Cookies
                    </Link>
                    <Link to={""} className='text-gray-500'>
                        Copyright
                    </Link>
                </div>
                <div className='flex flex-col items-start gap-4'>
                    <h1 className='font-bold'>
                        Follow
                    </h1>
                    <Link to={""} className='text-gray-500'>
                        Facebook
                    </Link>
                    <Link to={""} className='text-gray-500'>
                        Twitter
                    </Link>
                    <Link to={""} className='text-gray-500'>
                        Instagram
                    </Link>
                    <Link to={""} className='text-gray-500'>
                        Youtube
                    </Link>
                </div>

            </div>
            <hr className='border border-gray-300' />
            <div className='py-5 flex justify-between items-center'>
                <div className='text-gray-500'>
                &copy; 2024 CISCO_DEV | Tastebite - All right reserved
                </div>
                <div className='flex gap-5 text-gray-500'>
                    <FiFacebook/>
                    <FiTwitter/>
                    <FiInstagram/>
                    <FiYoutube/>
                </div>
            </div>
        </footer>
    )
}

export default Footer