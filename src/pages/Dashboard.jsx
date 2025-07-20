import React, { useState } from "react";
import PostsPerDay from "../recharts/postsPerDay";
import PostActivityHourly from "../recharts/postActivityHourly";

function Dashboard() {
  const [postsPerDay] = useState([{ chartHeader: "Average posts per day" }]);
  const [postActivityHourly] = useState([
    { chartHeader: "Average posts per hour" },
  ]);
  return (
    <section>
      <h1 style={styles.header}>Dashboard</h1>
      <div>
        {postsPerDay.map((postsPerDay, id) => (
          <PostsPerDay key={id} id={id} postsPerDay={postsPerDay} />
        ))}
      </div>
      <div>
        {postActivityHourly.map((postActivityHourly, id) => (
          <PostActivityHourly
            key={id}
            id={id}
            postActivityHourly={postActivityHourly}
          />
        ))}
      </div>
    </section>
  );
}

export default Dashboard;

const styles = {
  postActivity: {
    display: "flex",
    justifyContent: "center",
    width: "65%",
    backgroundColor: "white",
    fontSize: "0.8em",
    marginTop: "20px",
    margin: "auto",
    padding: "32px",
    margin: "20px",
    borderRadius: "5%",
  },
  header: {
    marginLeft: "30px",
    fontSize: "45px",
    marginLeft: "10px",
  },
};
