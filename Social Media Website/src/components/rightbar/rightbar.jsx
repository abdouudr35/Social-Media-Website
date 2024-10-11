import "./rightbar.css"
import {Users} from "../../dummyData"
import Online from "../Online/online"



export default function rightbar({profile}) {

  const HomeRightbar = () => {
    return(
      <>
    <div className="birthdayContainer">
    <img src="/assets/persons/birthday.png" alt="" className="birthdayImg" />
    <span className="birthdayText"> <b>Giacomo Raspadori</b> and <b>3 other friends</b> have a birthday today</span>

  </div>
  <img src="/assets/persons/ad.png" alt="" className="rightbarAd" />
  <h4 className="rightbarTitle">Online Friends</h4>
  <ul className="rightbarFriendList">

    {Users.map(u=>(
      <Online key={u.id} user={u}/>
    ))}
    
  </ul>
  </>
    );
  }

  const ProfileRightbar = () => {
    return (
<>
<h4 className="rightbarTitle">User information</h4>
<div className="rightbarInfo">
  <div className="rightbarInfoItem">
    <span className="rightbarInfoKey">City:</span>
    <span className="rightbarInfoValue">Napoli</span>
  </div>
   
  <div className="rightbarInfoItem">
    <span className="rightbarInfoKey">From:</span>
    <span className="rightbarInfoValue">Poland</span>
  </div>

  <div className="rightbarInfoItem">
    <span className="rightbarInfoKey">Relationship:</span>
    <span className="rightbarInfoValue">Married</span>
  </div>
 <h4 className="rightbarTitle">User friends</h4>
 <div className="rightbarFollowings">
  <div className="rightbarFollowing">
    <img src="/assets/persons/person2.jpg" alt="" className="rightbarFollowingImg" />
    <span className="rightbarFollowingName">Khvicha Kvaratskhelia</span>
  </div>
  <div className="rightbarFollowing">
    <img src="/assets/persons/person3.jpg" alt="" className="rightbarFollowingImg" />
    <span className="rightbarFollowingName">Victor Osimhen</span>
  </div>
  <div className="rightbarFollowing">
    <img src="/assets/persons/person4.jpg" alt="" className="rightbarFollowingImg" />
    <span className="rightbarFollowingName">Stanislav Lobotka</span>
  </div>
  <div className="rightbarFollowing">
    <img src="/assets/persons/person5.jpg" alt="" className="rightbarFollowingImg" />
    <span className="rightbarFollowingName">Zambo Anguissa</span>
  </div>
  <div className="rightbarFollowing">
    <img src="/assets/persons/person6.jpg" alt="" className="rightbarFollowingImg" />
    <span className="rightbarFollowingName">Elif Elmas</span>
  </div>
  <div className="rightbarFollowing">
    <img src="/assets/persons/person7.jpg" alt="" className="rightbarFollowingImg" />
    <span className="rightbarFollowingName">Giovanni Di Lorenzo</span>
  </div>
  <div className="rightbarFollowing">
    <img src="/assets/persons/person8.jpg" alt="" className="rightbarFollowingImg" />
    <span className="rightbarFollowingName">Matteo Politano</span>
  </div>
 </div>

</div>
</>
    );
  }
  return (
    <div className="rightbar">
    <div className="rightbarWrapper">
     {profile ? <ProfileRightbar/> :<HomeRightbar/> }
    </div>
    </div>
  )
}
