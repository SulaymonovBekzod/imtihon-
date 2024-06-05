import React, { Link } from 'react-router-dom';
import "./Login.css";
import Qush from "../../images/Qush.png";
const baseUrl = "https://reqres.in/"

export default function Login() {

    let data = {
        email: "eve.holt@reqres.in",
        password: "cityslicka"
    }

    async function getPost() {
        const endPoint = "api/login"
        let resp = await fetch(baseUrl + endPoint, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data),
        })
            .then((respons) => respons.json())
            .then((data) => {
                console.log(data);
                localStorage.setItem("token", data.token)
            })
    }

    return (
        <div className='container2'>
            <div className="row2">
                <div>
                    <img className='qush' src={Qush} alt="" />
                    <h1>Log in to Twitter</h1>
                    <input className='inp1' type="text" placeholder='phone number, email address' /> <br />
                    <input className='inp2' type="text" placeholder='password' />
                    <div className='sign_father'>
                        <a className='sign_up1' href="">Forgot password</a>
                        <a className='sign_up2' href="https://x.com/login?mx=2">Sign up to Twitter</a>
                    </div>
                </div>
                <Link to="/akkaunt"> <button className='btn_log'>Log in</button></Link>
            </div>
        </div>
    )
}
