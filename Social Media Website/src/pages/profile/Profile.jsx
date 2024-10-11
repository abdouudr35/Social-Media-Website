import "./profile.css"
import Feed from "../../components/feed/feed"
import Rightbar from "../../components/rightbar/rightbar"
import Sidebar from "../../components/sidebar/sidebar"
import Topbar from "../../components/Topbar"

export default function Profile() {
  return (
    <>
    <Topbar/>
    <div className="profile">
    <Sidebar/>
    <div className="profileRight">
    <div className="profileRightTop">
        <div className="profileCover">
        <img src="/assets/persons/coverpic.jpg.jpg" alt="" className="profileCoverImg" />
        <img src="/assets/persons/person1.jpg" alt="" className="profileUserImg" />
        </div>
       <div className="profileInfo">
        <h4 className="profileInfoName">Piotr Zielinski</h4>
        <span className="profileInfoDesc">Hello my friend</span>
       </div>
     </div>
    <div className="profileRightBottom">
        <Feed/>
        <Rightbar profile/>
    </div>
    </div>
    </div>
    </>
  );
}
