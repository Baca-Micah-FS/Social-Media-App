const LeftNav = () => {
  return (
    <header style={style.header}>
      <ul style={style.lists}>
        <div style={style.lists}>
          <li>
            <a style={style.lists} href="#newsFeed">
              News Feed
            </a>
          </li>
          <li>
            <a style={style.lists} href="#messages">
              Messages
            </a>
          </li>
          <li>
            <a style={style.lists} href="#watch">
              Watch
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
  },
  lists: {
    listStyleType: "none",
    color: "red",
  },
};
