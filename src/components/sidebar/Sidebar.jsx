import React from "react";
import "./Sidebar.css";
import { RssFeed, Chat, PlayCircle, Group, Bookmark, Help, Work, Event, School } from "@mui/icons-material";

function Sidebar() {
  return (
    <>
      <div className="sidebar sticky">
        <div className="sidebarWrapper">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <RssFeed className="sidebarIcon" />
              <span className="sidebarListItemText">Feed</span>
            </li>
            <li className="sidebarListItem">
              <Chat className="sidebarIcon" />
              <span className="sidebarListItemText">Chats</span>
            </li>
            <li className="sidebarListItem">
              <PlayCircle className="sidebarIcon" />
              <span className="sidebarListItemText">Videos</span>
            </li>
            <li className="sidebarListItem">
              <Group className="sidebarIcon" />
              <span className="sidebarListItemText">Groups</span>
            </li>
            <li className="sidebarListItem">
              <Bookmark className="sidebarIcon" />
              <span className="sidebarListItemText">Bookmark</span>
            </li>
            <li className="sidebarListItem">
              <Help className="sidebarIcon" />
              <span className="sidebarListItemText">Questions</span>
            </li>
            <li className="sidebarListItem">
              <Work className="sidebarIcon" />
              <span className="sidebarListItemText">Jobs</span>
            </li>
            <li className="sidebarListItem">
              <Event className="sidebarIcon" />
              <span className="sidebarListItemText">Events</span>
            </li>
            <li className="sidebarListItem">
              <School className="sidebarIcon" />
              <span className="sidebarListItemText">Courses</span>
            </li>
            <button className="sidebarButton">Show more</button>
            <hr className="sidebarHr" />
            <ul className="sidebarFriendList">
              <li className="sidebarFriend">
                <img src="/assets/person/8.jpg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">John Doe</span>
              </li>
              <li className="sidebarFriend">
                <img src="/assets/person/8.jpg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">John Doe</span>
              </li>
              <li className="sidebarFriend">
                <img src="/assets/person/8.jpg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">John Doe</span>
              </li>
              <li className="sidebarFriend">
                <img src="/assets/person/8.jpg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">John Doe</span>
              </li>
              <li className="sidebarFriend">
                <img src="/assets/person/8.jpg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">John Doe</span>
              </li>
              <li className="sidebarFriend">
                <img src="/assets/person/8.jpg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">John Doe</span>
              </li>
              <li className="sidebarFriend">
                <img src="/assets/person/8.jpg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">John Doe</span>
              </li>
              <li className="sidebarFriend">
                <img src="/assets/person/8.jpg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">John Doe</span>
              </li>
              <li className="sidebarFriend">
                <img src="/assets/person/8.jpg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">John Doe</span>
              </li>
              <li className="sidebarFriend">
                <img src="/assets/person/8.jpg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">John Doe</span>
              </li>
              <li className="sidebarFriend">
                <img src="/assets/person/8.jpg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">John Doe</span>
              </li>
              <li className="sidebarFriend">
                <img src="/assets/person/8.jpg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">John Doe</span>
              </li>
              <li className="sidebarFriend">
                <img src="/assets/person/8.jpg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">John Doe</span>
              </li>
              <li className="sidebarFriend">
                <img src="/assets/person/8.jpg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">John Doe</span>
              </li>
              <li className="sidebarFriend">
                <img src="/assets/person/8.jpg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">John Doe</span>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
