import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
function Login({ showLogin, onCloseLogin }) {
  const [changeForm,setFormChange] = useState()
  function onFormChange(value) {
   setFormChange(value)
  }
	return (
		<div className={showLogin?'fixed top-0 w-full h-screen overlay-modal z-[1500] flex justify-center items-center':'absolute top-0 w-full h-screen overlay-modal hidden z-50 justify-center items-center'} >
			<div className='bg-white w-[500px]  p-8'>
       
        <div className="absolute right-5 top-12 ">
          <button className="text-5xl" onClick={onCloseLogin}><IoCloseOutline /></button>
        </div>
        {changeForm==="signin"?<LoginForm onFormChange={onFormChange} />:<RegisterForm onFormChange={onFormChange}/>}
        
			</div>
		</div>
	);
}

export default Login;
