import { PlayArrow, Add, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@mui/icons-material"
import "./Listitem.css"
import { useState } from "react"

export default function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer ="../../../Assets/WhatsApp Video 2024-04-06 at 2.31.24 PM.mp4";
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://media-cache.cinematerial.com/p/500x/g7qqkt1r/hacksaw-ridge-british-movie-poster.jpg?v=1477694634"
        alt=""
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium hic rem eveniet error possimus, neque ex doloribus.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
}