import React from 'react';
import styles from "./leftbar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const Leftbar = () => {
  return (
    <div class="leftbar">
      <div className="header">
        <TwitterIcon/>
      </div>
      <div className="container">
        <div>
          <HomeIcon/>
          <h1>Home</h1>
        </div>
        <div>
          <SearchIcon/>
          <h1>Explore</h1>
        </div>
        <div>
          <NotificationsNoneIcon/>
          <h1>Notification</h1>
        </div>
        <div>
          <MailOutlineIcon/>
          <h1>Messages</h1>
        </div>
        <div>
          <BookmarkBorderIcon/>
          <h1>Bookmarks</h1>
        </div>
        <div>
          <ListAltIcon/>
          <h1>Lists</h1>
        </div>
        <div>
         <PermIdentityIcon/>
          <h1>Profile</h1>
        </div>
        <div>
          <MoreHorizIcon/>
          <h1>More</h1>
        </div>
        <div>
          <div class="text-button">
          Tweet
          </div>
        </div>        
      </div>
      
      
      <div className="profile">
        <div className="container-row">
        <div class="card">
          <img src="images/logos/node.Png" alt=""/>
        </div>

        <div className="info">
          <h3>Exukasu</h3>
          <p>@ernesto14568243</p>
        </div>
        </div>
        

      </div>
    </div>
  );
}

export default Leftbar;