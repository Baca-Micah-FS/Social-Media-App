// News/Reminder Page containing API for latest news articles and information. The Notification bell in the header will link here

import { useState, useEffect } from "react";

function NewsHeadline() {
  const [headline, setHeadline] = useState(null);

  useEffect(() => {
    async function fetchNews() {
      const response = await fetch(
        "https://newsdata.io/api/1/news?apikey=pub_a4cbb42768d041a282243548c011de2b&country=us&language=en&category=top&size=1"
      );
      const data = await response.json();
      setHeadline(data.results[0]);
    }
    fetchNews();
  }, []);

  return (
    <section style={styles.container}>
      <h1>Today's News</h1>
      {headline ? (
        <div>
          <h2 style={styles.paragraph}>{headline.title}</h2>
          <p style={styles.paragraph}>{headline.description}</p>
          <a
            style={styles.readMore}
            href={headline.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more
          </a>
        </div>
      ) : (
        <p>Loading Headline</p>
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

  paragraph: {
    paddingLeft: "15px",
  },
  readMore: {
    paddingLeft: "15px",
    color: " #778da9",
    fontWeight: "bold",
  },
};
