// News/Reminder Page containing API for latest news articles and information. The Notification bell in the header will link here

import { useState, useEffect } from "react";

function NewsHeadline(props) {
  const [headline, setHeadline] = useState(null);

  useEffect(() => {
    async function fetchNews() {
      const response = await fetch(
        "https://newsdata.io/api/1/news?apikey=pub_a4cbb42768d041a282243548c011de2b&country=us&language=en&category=top&size=1"
      );
      const data = await response.json();
      setTimeout(() => {
        setHeadline(data.results[0]);
      }, 900);
    }
    fetchNews();
  }, []);

  return (
    <section style={styles.container}>
      <h1>{props.News}</h1>
      {headline ? (
        <div>
          <h2 style={styles.header}>{headline.title}</h2>
          <p style={styles.paragraph}>{headline.description}</p>
          <a
            style={styles.readMore}
            href={headline.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.Readmore}
          </a>
        </div>
      ) : (
        <p style={styles.loadingHeadline}>{props.LoadingHeadline}</p>
      )}
    </section>
  );
}

export default NewsHeadline;

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    margin: "25px 25px",
    backgroundColor: "white",
    alignItems: "center",
    padding: "20px",
    boxShadow: "5px 5px rgba(163, 173, 194)",
  },

  header: {
    paddingLeft: "15px",
  },
  paragraph: {
    paddingLeft: "15px",
    fontSize: "18px",
    fontStyle: "italic",
  },
  readMore: {
    paddingLeft: "15px",
    color: " #778da9",
    fontWeight: "bold",
  },
  loadingHeadline: {
    marginRight: "8rem",
    fontSize: "30px",
    fontStyle: "italic",
  },
};
