import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/Mail.css'
function Mail(props) {

  const navigate = useNavigate();
  return (
    <div 
        onClick={()=> {
            navigate("/mail")
            props.handleSelected()
          }
        } 
        className={`mail ${props.selected && "mail-active"}` }
      >
        <div className="pfp">
            <img src={require("../images/FTqHfUcUsAA4WYG.jpg")} alt="" />
        </div>
        <div className="mail-synopsis">
            <h6>{props.sender}</h6>
            <p>{props.synopsis}</p>
        </div>
    </div>
  )
}

export default Mail