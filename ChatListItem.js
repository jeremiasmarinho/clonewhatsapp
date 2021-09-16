import React from "react";
import './ChatListItem.css'
export default ({onClick}) => {
  return (
    <div 
    className="chatListItem"
    onClick={onClick}
    >
        <img className="chatListItem-avatar" src="https://cdn.icon-icons.com/icons2/2859/PNG/512/avatar_face_man_boy_male_profile_smiley_happy_people_icon_181657.png" alt=""/>
        <div className="chatListItem-lines">
            <div className="chatListItem-line">
                <div className="chatListItem-name">Jeremias Marinho</div>
                <div className="chatListItem-date">19:00</div>
            </div>
            <div className="chatListItem-line">
              <div className="chatListItem-lastMsg">
                  <p>Opa, tudo bem? </p>
              </div>
           </div>
        </div>
        

    </div>
  );
}