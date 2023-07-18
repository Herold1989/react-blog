import { useEffect, useState } from "react"
import axios from "axios";
import "./sidebar.css"
import { Link } from "react-router-dom";

export default function Sidebar() {
    const  [cats, setCats] = useState([]);
    useEffect(()=>{
        const getCats = async ()=>
        {
            const res = await axios.get("/categories")
            setCats(res.data)
        }
        getCats();
    },[])
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img
                    src="https://gist.githubusercontent.com/Shraddhasaini/2ffb08540a2e2843f04e5504d5a1e228/raw/ae5913b5fa49eb153b10a1dcabb5ab7c05e9dae0/about-me.jpg"
                    alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, unde praesentium at cupiditate asperiores.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map((c) => (
                        <Link to ={`/?cat=${c.name}`} className="link">        
                        <li className="sidebarListItem">{c.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className=" sidebarIcon fab fa-facebook-square"></i>
                    <i className=" sidebarIcon fab fa-twitter-square"></i>
                    <i className=" sidebarIcon fab fa-pinterest-square"></i>
                    <i className=" sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}
