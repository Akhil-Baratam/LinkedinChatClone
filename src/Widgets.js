import React from 'react'
import "./Widgets.css"
import InfoIcon from "@mui/icons-material/Info"
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord"

function Widgets() {
    const newsArticle = (heading, subtitile) => (
        <div className='widgets_article'>
            <div className="widgets_articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets_articleRight">
                <h4>{heading}</h4>
                <p>{subtitile}</p>
            </div>
        </div>
    )

  return (
    <div className='widgets'>
        <div className="widgets_header">
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>

        {newsArticle("Adida application", "ok amma, App lipendi. Ika vadukondi")}
    </div>
  );
}

export default Widgets