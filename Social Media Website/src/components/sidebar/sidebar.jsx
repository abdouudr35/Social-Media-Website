import "./sidebar.css"
import{Bookmark, Event, Chat, Group, HelpOutline, PlayCircleFilledOutlined, RssFeed, School, WorkOutline} from "@material-ui/icons"
import {Users} from "../../dummyData"
import Friend from "../Friends/friend"

export default function sidebar() {
  return (
    <div className="sidebar">
    <div className="sidebarWrapper">
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <RssFeed className="sideBarIcon"/>
                <span className="sidebarListItemtext">Feed</span>
              </li>
              <li className="sidebarListItem">
                <Chat className="sideBarIcon"/>
                <span className="sidebarListItemtext">Chats</span>
              </li>
              <li className="sidebarListItem">
                <PlayCircleFilledOutlined className="sideBarIcon"/>
                <span className="sidebarListItemtext">Videos</span>
              </li>
              <li className="sidebarListItem">
                <Group className="sideBarIcon"/>
                <span className="sidebarListItemtext">Groups</span>
              </li>
              <li className="sidebarListItem">
                <Bookmark className="sideBarIcon"/>
                <span className="sidebarListItemtext">Bookmarks</span>
              </li>
              <li className="sidebarListItem">
                <HelpOutline className="sideBarIcon"/>
                <span className="sidebarListItemtext">Questions</span>
              </li>
              <li className="sidebarListItem">
                <WorkOutline className="sideBarIcon"/>
                <span className="sidebarListItemtext">Jobs</span>
              </li>
              <li className="sidebarListItem">
                <Event className="sideBarIcon"/>
                <span className="sidebarListItemtext">Events</span>
              </li>
              <li className="sidebarListItem">
                <School className="sideBarIcon"/>
                <span className="sidebarListItemtext">Courses</span>
              </li>
            </ul>
            <button className="sidebarButton">Show More</button>
            <hr className="sidebarHr"/>
            <ul className="sidebarFriendList">
            {Users.map(u=>(
          <Friend key={u.id} user={u}/>
        ))}
        
            </ul>
    </div>
    </div>
  )
}
