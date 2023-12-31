import React from 'react'
import "./ManageAssets.css";
import logo from "../assets/WhiteLogo.png";
import ov1 from "../assets/images/ov1.png";
import ov2 from "../assets/images/ov2.png";
import ov3 from "../assets/images/ov3.png";
import ov4 from "../assets/images/ov4.png";
import ov5 from "../assets/images/ov5.png";
import asgnImg from "../assets/images/Desk_alt.png";
import Link from "../assets/images/Link.png";
import clock from "../assets/images/clock.png";
import question from "../assets/images/help_circle_outline.png";
import arrow from "../assets/images/Chevron down.png";
import { AddNewBtn } from './AddNewBtn';

export const ManageAssets = () => {
    return (
        <div className="row">
            <div className="col-md-1 leftcol">
                <img src={logo} alt="" />
            </div>
            <div className="col-md-11">
                <div className="container">
                    <div className="contentBox overview w-100">
                        <div className="d-flex justify-content-between">
                            <h4>Overview</h4>
                            <h4 className='d-flex align-items-center'>Assignments <img src={arrow} className='ml-3 arrow' alt="" /></h4>
                        </div>
                        <div className="stats">
                            <div className="stat">
                                <img src={ov1} alt="" />
                                <h5>14</h5>
                                <p>Received</p>
                            </div>
                            <div className="line"></div>
                            <div className="stat">
                                <img src={ov2} alt="" />
                                <h5>14</h5>
                                <p>Received</p>
                            </div>
                            <div className="line"></div>
                            <div className="stat">
                                <img src={ov3} alt="" />
                                <h5>14</h5>
                                <p>Received</p>
                            </div>
                            <div className="line"></div>
                            <div className="stat">
                                <img src={ov4} alt="" />
                                <h5>14</h5>
                                <p>Received</p>
                            </div>
                            <div className="line"></div>
                            <div className="stat">
                                <img src={ov5} alt="" />
                                <h5>14</h5>
                                <p>Received</p>
                            </div>
                        </div>
                    </div>
                    <div className="contentBox w-100">
                        <div className="d-flex justify-content-between">
                            <h4>Assignments</h4>
                            <AddNewBtn/>
                        </div>
                        <div className="tasks">
                            <div className="task my-4 d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center w-100">
                                    <div><img src={asgnImg} alt="" /></div>
                                    <div className="ml-10 d-flex flex-column justify-content-center w-100">
                                        <h4>Math Task</h4>
                                        <div className="rectangle"></div>
                                        <div className='pdfLink'><a href="" className='d-flex'><img src={Link} alt="" className='mr-2'/>  Document.pdf</a></div>
                                    </div>
                                </div>
                                <div className="d-flex flex-column justify-content-center align-items-center dueDate">
                                    <div>Due</div>
                                    <div>19 July</div>
                                </div>
                            </div>

                            <div className="horzLine"></div>
                            
                            <div className="task my-4 d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center w-100">
                                    <div><img src={asgnImg} alt="" /></div>
                                    <div className="ml-10 d-flex flex-column justify-content-center w-100">
                                        <h4>Social Science</h4>
                                        <div className="rectangle"></div>
                                        <div className='pdfLink'><a href="" className='d-flex'><img src={Link} alt="" className='mr-2'/>  Document.pdf</a></div>
                                    </div>
                                </div>
                                <div className="d-flex flex-column justify-content-center align-items-center dueDate">
                                    <div>Due</div>
                                    <div>29 July</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-between w-100">
                    <div className="col-md-6">
                    <div className="contentBox mt-3 mb-3 mr-2">
                        <div className="d-flex justify-content-between">
                            <h4>Quizes</h4>
                            <AddNewBtn/>
                        </div>
                        <div>
                            <div className="my-4 d-flex justify-content-between align-items-center w-100">
                    
                                    <div><img src={asgnImg} alt="" /></div>
                                    <div className="ml-10 d-flex flex-column justify-content-center w-100">
                                        <h4>English Quiz</h4>
                                        <div className='d-flex'>
                                            <span className='d-flex align-items-center mr-3'><a href="" ><img src={question} alt="" className='mr-2'/></a> 25 questions</span>
                                            <span className='d-flex align-items-center'><a href="" ><img src={clock} alt="" className='mr-2'/></a>  15 min</span>
                                        </div>
                            
                                </div>
                            </div>

                            <div className="horzLine"></div>

                            <div className="my-4 d-flex justify-content-between align-items-center w-100">
                    
                                    <div><img src={asgnImg} alt="" /></div>
                                    <div className="ml-10 d-flex flex-column justify-content-center w-100">
                                        <h4>English Quiz</h4>
                                        <div className='d-flex'>
                                            <span className='d-flex align-items-center mr-3'><a href="" ><img src={question} alt="" className='mr-2'/></a> 25 questions</span>
                                            <span className='d-flex align-items-center'><a href="" ><img src={clock} alt="" className='mr-2'/></a>  15 min</span>
                                        </div>
                            
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6">
                    <div className="contentBox mt-3 mb-3 w-100">
                        <div className="d-flex justify-content-between">
                            <h4>Tests</h4>
                            <AddNewBtn/>
                        </div>
                        
                    </div>
                    </div>
                    
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
