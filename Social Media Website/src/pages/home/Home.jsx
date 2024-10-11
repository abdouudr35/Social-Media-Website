import Topbar from "../../components/Topbar"
import Feed from "../../components/feed/feed"
import Rightbar from "../../components/rightbar/rightbar"
import Sidebar from "../../components/sidebar/sidebar"
import "./home.css"

 export default function Home() {
  return (
    <div>
         <Topbar/>
        <div className="homeContainer">
           <Sidebar/>
           <Feed />
           <Rightbar/>

        </div>
    </div>
  );
}

