// Messages Page containing future content to track messages across users

function Messages(props) {
  return (
    <section>
      <h1 style={styles.messages}>{props.Messages}</h1>
      <p></p>
    </section>
  );
}

export default Messages;

const styles = {
  messages: {
    padding: "15px",
  },
};
