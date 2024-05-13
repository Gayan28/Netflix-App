import { InfoOutlined, PlayArrow } from "@mui/icons-material"
import "./Featured.css"

export default function Featured({type}) {
  return (
    <div className='featured'>
    {type && (
    <div className="category">
    <span>{type === "movies" ? "Movies" : "TvSeries"}</span>
    <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
    
    </div>
    )}
      <img src="https://getwallpapers.com/wallpaper/full/4/9/8/829658-free-download-movie-backgrounds-1920x1080.jpg" alt="" />
      <div className="info">
      <img src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1" alt="" />
      <span className="desc">Figma is one of the most revolutionary graphics editing apps that’s taking 
        over the design world by storm. What makes it so attractive is the fact that it’s free to use.
        If you’re still not familiar with this wondering web-based app or looking for tips on how to make
        the most of the software.</span>
      <div className="buttons">
        <button className="play">
            <PlayArrow />
            <span>Play</span>
        </button>
        <button className="more">
            <InfoOutlined />
            <span>Info</span>
        </button>
      </div>
      </div>
    </div>
  )
}
