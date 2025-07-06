const LeftNav = (props) => {
  return (
    <header style={style.header}>
      <ul style={style.lists}>
        <div style={style.lists}>
          <li>
            <a style={style.lists} href="#newsFeed">
              {props.NewsFeed}
            </a>
          </li>
          <li>
            <a style={style.lists} href="#messages">
              {props.Messages}
            </a>
          </li>
          <li>
            <a style={style.lists} href="#watch">
              {props.Watch}
            </a>
          </li>
        </div>
      </ul>
    </header>
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
