import { ArrowBackOutlined } from "@mui/icons-material"
import "./Watch.css"

export default function Watch() {
  return (
    <div className="watch">
    <div className="back">
        <ArrowBackOutlined />
        Home
    </div>
      <video className="video" autoPlay onProgress controls src="../../../Assets/WhatsApp Video 2024-04-06 at 2.31.24 PM.mp4"/>
    </div>
  )
}
