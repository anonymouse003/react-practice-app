import React from 'react';
import add_box from "../assets/images/add_box.png";
import arrow from "../assets/images/Chevron down.png";
import "./AddNewBtn.css";

export const AddNewBtn = () => {
  return (
    <div className='d-flex justify-content-between align-items-center'>
        <div className='AddNewBtn d-flex justify-content-between align-items-center'>
            <img src={add_box} className='mr-4' alt="Add" />
            <p className='mb-0'>Add New</p>
        </div>
        <div><img src={arrow} className='ml-3 arrow' alt="" /></div>
    </div>
    
  )
}
