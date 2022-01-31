import React, { useState } from "react";
import "./Post.css";
import { MoreVert, Recommend, Favorite } from "@mui/icons-material";
import { Users } from "../../dummyData";

function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLike, setIsLike] = useState(false);
  const handleLike = () => {
    setLike(isLike ? like - 1 : like + 1);
    setIsLike(!isLike);
  };

  return (
    <>
      <div className="post">
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <img
                src={Users.filter((item) => item.id === post.userId)[0].profilePicture}
                alt=""
                className="postProfileImg"
              />
              <span className="postUsername">{Users.filter((item) => item.id === post.userId)[0].username}</span>
              <span className="postDate">{post.date}</span>
            </div>
            <div className="postTopRight">
              <MoreVert />
            </div>
          </div>
          <div className="postCenter">
            <span>{post?.desc}</span>
            <img src={post.photo} alt="" className="postImg" />
          </div>
          <div className="postBottom">
            <div className="postBottomeLeft">
              <Recommend className="likeIcon" htmlColor="blue" onClick={handleLike} />
              <Favorite className="likeIcon" htmlColor="red" onClick={handleLike} />
              <span className="postBottomCounter">{like} people like this</span>
            </div>
            <div className="postBottomRight">
              <span className="postCommentText">{post.comment} comments</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
