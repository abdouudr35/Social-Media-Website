import { MoreVert } from "@material-ui/icons"
import "./post.css"
import {Users} from "../../dummyData"
import { useState } from "react"

export default function Post({post}) {
  const [like,setLike] =useState(post.like)
  const [isliked,setisLiked] =useState(false)
  const likeHandler=()=>{
    setLike(isliked ? like-1 : like+1)
    setisLiked(!isliked)
  }
  return (

    <div>
        <div className="post">
      <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
            <img src={Users.filter((u)=>u.id === post.userId)[0].profilePicture} alt="" className="postProfileImg" />
                <span className="postUsername">{Users.filter((u)=>u.id === post.userId)[0].username}</span>
                <span className="postDate">{post.date}</span>    
            </div>
            <div className="postTopRight"></div>
            <MoreVert/>
        </div>
        <div className="postCenter"></div>
        <span className="postText">{post?.desc} </span>
        <img src={post.photo} alt="" className="postImg" />
        <div className="postBottom">
        <div className="postBottomLeft">
            <img className="likeIcon" src="/assets/persons/like.png" onClick={likeHandler}/>
            <img className="likeIcon" src="/assets/persons/love.png" onClick={likeHandler}/>
            <span className="postLikeCounter">{like}</span>
        
        </div>
        <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
        </div>
        </div>
      </div>
    </div>
    </div>
  )
}
