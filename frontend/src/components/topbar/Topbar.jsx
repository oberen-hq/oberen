import "./Topbar.css";
import {
  Search,
  Person,
  Chat,
  Notifications,
  ArrowDropDown,
} from "@material-ui/icons";

import { Avatar } from "@material-ui/core";

import { GroupAdd, Telegram, Assignment } from "@material-ui/icons";

import { Link, useHistory } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Topbar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  let history = useHistory("");

  const getFriendNotifications = () => {
    return 1;
  };

  const getMessageNotifications = () => {
    return 1;
  };

  const getPushNotifications = () => {
    return 1;
  };

  const logout = (event) => {
    event.preventDefault();

    window.localStorage.clear();
    history.push("/logout");
    window.location.replace("/login");
  };

  return (
    <div className="homeHeader">
      <div className="homeHeader__left">
        <Link to="/">
          <img
            src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
            className="homeHeader__logo"
          />
        </Link>
      </div>

      <div className="homeHeader__inputSearch">
        <input type="text" placeholder="Search:" />
        <Search className="homeHeader__inputButton" />
      </div>
      <div className="homeHeader__icons">
        <section>
          <Link to={`/profile/${user.username}`}>
            <Avatar
              className="homeHeader__avatar"
              alt="User image"
              src={
                user.profilePicture
                  ? PF + user.profilePicture
                  : PF + "person/noAvatar.png"
              }
            />
          </Link>
          <h3 className="homeHeader__name">{user.username}</h3>
        </section>

        <h3 className="homeHeader__dash"> | </h3>

        <section>
          <h3 className="homeHeader__name">Home</h3>
        </section>

        <h3 className="homeHeader__dash"> | </h3>

        <section>
          <h3 className="homeHeader__name">Find Friends</h3>
        </section>

        <h3 className="homeHeader__dash"> | </h3>

        <section>
          <h3 className="homeHeader__name">Create</h3>
        </section>

        <h3 className="homeHeader__dash"> | </h3>

        <section>
          <span className="topbarIconBadge">{getPushNotifications()}</span>
          <GroupAdd />
        </section>

        <h3 className="homeHeader__dash"> | </h3>

        <section>
          <span className="topbarIconBadge">{getPushNotifications()}</span>
          <Telegram />
        </section>

        <h3 className="homeHeader__dash"> | </h3>

        <section>
          <span className="topbarIconBadge">{getPushNotifications()}</span>
          <Notifications />
        </section>

        <h3 className="homeHeader__dash"> | </h3>

        <section>
          <span className="topbarIconBadge">{getPushNotifications()}</span>
          <Assignment />
        </section>

        <section>
          <div className="dropdown">
            <ArrowDropDown className="dropdown" />
            <div className="dropdown-content">
              ,<a onClick={logout}></a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
