//Navigation Bar containing Dashboard, Newsfeed, Messages, Settings, and News pages

import { Link } from "react-router";

const LeftNav = (props) => {
  return (
    <nav style={style.header}>
      <ul style={style.lists}>
        <div style={style.lists}>
          <li>
            <Link style={style.lists} to="/">
              {props.Dashboard}
            </Link>
          </li>
          <li>
            <Link style={style.lists} to="/Newsfeed">
              {props.NewsFeed}
            </Link>
          </li>
          <li>
            <Link style={style.lists} to="/Messages">
              {props.Messages}
            </Link>
          </li>
          <li>
            <Link style={style.lists} to="/Settings">
              {props.Settings}
            </Link>
          </li>
          <li>
            <Link style={style.lists} to="/Reminder">
              {props.News}
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default LeftNav;

const style = {
  header: {
    lineHeight: "3.5rem",
    fontSize: "1.1rem",
    color: "#0d1b2a",
  },
  lists: {
    listStyleType: "none",
    color: "#0d1b2a",
    fontFamily: "Open Sans",
    fontWeight: "bold",
  },
};
