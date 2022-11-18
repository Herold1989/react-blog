import "./topbar.css"
export default function TopBar() {
  return (
    <div className="top">
        <div className="topLeft">
            <i className=" topIcon fab fa-facebook-square"></i>
            <i className=" topIcon fab fa-twitter-square"></i>
            <i className=" topIcon fab fa-pinterest-square"></i>
            <i className=" topIcon fab fa-instagram-square"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">HOME</li>
                <li className="topListItem">ABOUT</li>
                <li className="topListItem">CONTACT</li>
                <li className="topListItem">WRITE</li>
                <li className="topListItem">LOGOUT</li>
            </ul>
        </div>
        <div className="topRight">
            <img className ="topImg" 
                src="https://media-exp1.licdn.com/dms/image/C4D03AQGQxEHObPdKPw/profile-displayphoto-shrink_800_800/0/1521378950303?e=2147483647&v=beta&t=xWKvfpVbtvHdA6OOKLRJN4Mj40TDBE8ns5Hw7oPGoL0"
                alt=""
            />
            <i className =" topSearchIcon fas fa-search"></i>
        </div>

    </div>
  )
}
