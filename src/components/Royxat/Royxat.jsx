import { Link } from "react-router-dom"
import React from "react"
import "./Royxat.css"
import Qush from "../../images/Qush.png"

export default function Royxat() {

    return (
        <div className='container'>
            <div className="row">
                <div>
                    <img className='qush_img' src={Qush} alt="" />
                </div>
                <div>
                    <h1 className='login_account'>Create an account</h1>
                    <input className='input_login1' type="text" placeholder='Name' /> <br />
                    <input className='input_login2' type="text" placeholder='Phone Number' />
                    <a className='login_email' href="">Use email</a>
                </div>
                <div>
                    <h2 className='login_date'>Date of birth</h2>
                    <p className='login_text'>Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante <br />phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id <br />ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.</p>
                </div>
                <div >
                    <select className='login_select1' name="" id="">
                        <option value="">Month</option>
                    </select>
                    <select className='login_select2' name="" id="">
                        <option value="">Day</option>
                    </select>
                    <select className='login_select3' name="" id="">
                        <option value="">Year</option>
                    </select>
                </div>
                <Link to="/login"><button className='login_btn'>Next</button></Link>
            </div>
        </div>
    )
}
