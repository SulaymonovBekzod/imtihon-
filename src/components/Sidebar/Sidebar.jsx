import React from 'react'
import "./Sidebar.css"
import Qush from "../../images/Qush.png"
import Vector from "../../images/Vector.png"
import Explore from "../../images/explore.png"
import Qongiroq from "../../images/notification.png"
import Massage from "../../images/messages.png"
import BookMarks from "../../images/bookmarks.png"
import Lists from "../../images/lists.png"
import Profile from "../../images/profil.png"
import More from "../../images/more.png"
import Chap from "../../images/right.png"
import Sulaymonov from "../../images/sulaymonov___1.jpg"
import Location from "../../images/Location.png"
import Link from "../../images/Link.png"
import Month from '../../images/Month.png'
import Table from "../../images/Table.png"
import Odamlar from "../../images/Peoples.png"
import Shuxratbek from '../../images/Shuhratbek.png'
import Mushtariy from "../../images/Mushtariy.png"

export default function Sidebar() {
    return (
        <div className='container3'>
            <div className="row3">
                <div className="sidebar">
                    <img src={Qush} alt="" />
                </div>
                <div className='logos col-6'>
                    <div className='pages'>
                        <div>
                            <img src={Vector} alt="" />
                        </div>
                        <div>
                            <h3>Home</h3>
                        </div>
                    </div>
                    <div className='pages'>
                        <div>
                            <img src={Explore} alt="" />
                        </div>
                        <div>
                            <h3>Explore</h3>
                        </div>
                    </div>
                    <div className='pages'>
                        <div>
                            <img src={Qongiroq} alt="" />
                        </div>
                        <div>
                            <h3>Notifications</h3>
                        </div>
                    </div>
                    <div className='pages'>
                        <div>
                            <img src={Massage} alt="" />
                        </div>
                        <div>
                            <h3>Messages</h3>
                        </div>
                    </div>
                    <div className='pages'>
                        <div>
                            <img src={BookMarks} alt="" />
                        </div>
                        <div>
                            <h3>Bookmarks</h3>
                        </div>
                    </div>
                    <div className='pages'>
                        <div>
                            <img src={Lists} alt="" />
                        </div>
                        <div>
                            <h3>Lists</h3>
                        </div>
                    </div>
                    <div className='pages'>
                        <div>
                            <img src={Profile} alt="" />
                        </div>
                        <div>
                            <h3>Profile</h3>
                        </div>
                    </div>
                    <div className='pages'>
                        <div>
                            <img src={More} alt="" />
                        </div>
                        <div>
                            <h3>More</h3>
                        </div>
                    </div>
                    <button className='profil_btn'>Tweet</button>
                    <hr className='uzun' />
                </div>
                <div className='profil'>
                    <div>
                        <img className="right" src={Chap} alt="" />
                    </div>
                    <div>
                        <h2 className='profil_name'>Bekzod</h2>
                        <h3 className='profil_subscribers'>1,070 Tweets</h3>
                    </div>
                </div>
            </div>
            <div className="profil_view">
                <div>
                    <h1 className="profil_name_img">Sulaymonov Bekzod</h1>
                    <img className='bekzod' src={Sulaymonov} alt="" />
                    <button className='profil_edit'>Edit Profil</button>
                    <h3 className='profil_bekzod'>Bekzod</h3>
                    <p className="profil_telegram">@sulaymonov_818</p>
                    <p className='profil_soff'>UX&UI designer at <a className="profil_study" href="https://soffstudy.uz/">@soffstudy</a></p>
                </div>
                <div classNme="hujjat">
                    <div className='owade'>
                        <div>
                            <img src={Location} alt="" />
                        </div>
                        <div>
                            <p>Mashag`daman</p>
                        </div>
                        <div>
                            <img src={Link} alt="" />
                        </div>
                        <div>
                            <a href="https://t.me/sulaymonov_818">@tme/Sulaymonov_818</a>
                        </div>
                        <div>
                            <img src={Month} alt="" />
                        </div>
                        <div>
                            <p>Born November 24,</p>
                        </div>
                        <div>
                            <img src={Table} alt="" />
                        </div>
                        <div>
                            <p>Joined May 2020</p>
                        </div>
                    </div>
                    <div className='profil_followers'>
                        <div>
                            <p>67 Following</p>
                        </div>
                        <div>
                            <p>47 Followers</p>
                        </div>
                    </div>
                </div>
                <hr className='uzun2' />
            </div>
            <div className='filter'>
                <div className="filter_sidebar">
                    <input className='profil_search' type="text" placeholder='search twitter' />
                    <img className='peoples' src={Odamlar} alt="" />
                </div>
            </div>
            <div className='profil_people'>
                <h1 className='profil_filter_text'>you might like</h1>
                <div className='profil_mushtariy'>
                    <div>
                        <img src={Mushtariy} alt="" />
                    </div>
                    <div>
                        <h3 className='profil_name_mushtariiy'>Mushtariy</h3>
                        <p className='profil_silka_mushtariy'>@Mushtar565266</p>
                    </div>
                    <div>
                        <button className='mushtariy_btn'>Follow</button>
                    </div>
                </div>
                <div className='profil_shuhratbek'>
                    <div>
                        <img src={Shuxratbek} alt="" />
                    </div>
                    <div>
                        <h3 className='profil_name_shuhratbek'>Shuxratbek</h3>
                        <p className='profil_silka_shuhratbek'>@mrshuhratbek</p>
                    </div>
                    <div>
                        <button className='shuhrat_btn'>Follow</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
