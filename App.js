import React,{ useState, useEffect } from "react";
import './App.css';

import ChatListItem from "./components/ChatListItem";
import Chatintro from "./components/Chatintro";
import ChatWindow from "./components/ChatWindow";

import MoreVertIcon from '@material-ui/icons/MoreVert';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import SearchIcon from '@material-ui/icons/Search';

export default () => {

    const [chatlist, setChatlist] = useState([
      {chatId:1, title:'fulano', image:"https://cdn.icon-icons.com/icons2/2859/PNG/512/avatar_face_man_boy_male_profile_smiley_happy_people_icon_181657.png"},
      {chatId:2, title:'fulano', image:"https://cdn.icon-icons.com/icons2/2859/PNG/512/avatar_face_man_boy_male_profile_smiley_happy_people_icon_181657.png"},
      {chatId:3, title:'fulano', image:"https://cdn.icon-icons.com/icons2/2859/PNG/512/avatar_face_man_boy_male_profile_smiley_happy_people_icon_181657.png"},
      {chatId:4, title:'fulano', image:"https://cdn.icon-icons.com/icons2/2859/PNG/512/avatar_face_man_boy_male_profile_smiley_happy_people_icon_181657.png"},

    ]);
    const [activeChat, setActiveChat] = useState({});

  return (
    <div className="app-window">
      <div className="sidebar">
            <header>
              <img className="header-avatar" src="https://cdn.icon-icons.com/icons2/2859/PNG/512/avatar_face_man_boy_male_profile_smiley_happy_people_icon_181657.png" alt=""/>
              <div className="header-buttons">
                <div className="header-btn">
                  <DonutLargeIcon style={{color: '#919191'}}/>
                </div>
                <div className="header-btn">
                  <ChatIcon style={{color: '#919191'}}/>
                </div>
                <div className="header-btn">
                  <MoreVertIcon style={{color: '#919191'}}/>
                </div>
              </div>
            </header>
            <div className="search">
              <SearchIcon fontSize="small" style={{color: '#919191'}}/>
            <input type="search" placeholder="Procurar ou começar uma nova conversa"/>
            </div>
            <div className="chatlist">
                {chatlist.map((item, key)=>(
                   <ChatListItem
                    key={key}
                    onClick={()=>setActiveChat(chatlist[key])}
                   />           
                ))}
            </div>
      </div>
       <div className="contentarea">
          {activeChat.chatId !== underfined &&
          <ChatWindow/>
          }
          {activeChat.chatId === underfined && 
          <Chatintro/>
          }
       </div>
    </div>
  );
}
