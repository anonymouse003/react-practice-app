import React, { useState } from 'react'
import logo from "../assets/WhiteLogo.png";
import "./SignUp.css";
// const [firstName,setFirstName]=useState('');
// const [lastName,setFirstName]=useState('');
export const SignUp = () => {
  return (
    <div className='row'>
        <div className="col-5 leftcol">
            <img src={logo} alt="logo" />
        </div>
        <div className="col-md-7 p-5 rightcol">
            <h2 className='heading mt-4 mb-5'>Sign up free</h2>
            <form action="" className='regForm'>
                <div className="form-group row mb-3">
                    <div className="col-6"><input type="text" className="form-control" name="firstName" placeholder='First Name' /></div>
                    <div className="col-6"><input type="text" className="form-control" name="lastName" placeholder='Last Name' /></div>
                </div>
                <div className="form-group mb-3">
                    <input type="number" name="phoneNumber" className="form-control" placeholder='Phone Number'/>
                </div>
                <div className="form-group mb-3">
                    <input type="password" name="password" className="form-control" placeholder='Set a Password'/>
                </div>
                <div className="form-group mb-3">
                    <input type="password" className="form-control" placeholder='Confirm Password'/>
                </div>
                <div className="btndiv">
                <button>Register</button>
                <p className='mt-2'>By continuing, you agree to our User Agreement and acknowledge
that you understand the Privacy Policy.</p>
                </div>
            </form>
            <div className='login'>
                <p>Already have an account  ?</p>
                <button className='px-3 py-1'>Tap To Login</button>
            </div>
        </div>
    </div>
  )
}

